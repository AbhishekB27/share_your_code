"use server";

import { signIn } from "@/auth";
import { EmailTemplate } from "@/components/mailTemplate/EmailTemplate";
import { connectDB } from "@/dbConfig/dbConfig";
import generateToken, { verifyToken } from "@/lib/generateToken";
import hashedPassword from "@/lib/hashedPassword";
import User from "@/models/user";
import { AuthError } from "next-auth";
import { Resend } from "resend";

// user regsiteration server action
export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  await connectDB();
  try {
    const user = await User.findOne({ email });
    if (user) {
      return {
        success: false,
        data: null,
        message: "User Already Exists",
      };
    }
    const hashedPass = await hashedPassword(password);
    const verifyToken = generateToken({ email });
    const newUser = new User({
      username,
      email,
      password: hashedPass,
      verificationToken: verifyToken,
    });
    await newUser.save();

    return {
      success: true,
      data: { email: newUser.email, token: verifyToken },
    };
  } catch (error: any) {
    return {
      success: false,
      data: null,
      message: "Error While Register User!",
    };
  }
}

//send verification email server action
export async function sendVerificationEmail(email: string, token: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const verificationLink = `${process.env.NEXT_PUBLIC_DOMAIN}/verifyEmail/${token}`;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Email Verification",
      react: EmailTemplate({ verificationLink }),
    });
    if (error) {
      return { success: false, error: "Error While Email Sent!" };
    }
    return { success: true, data: data };
  } catch (error: any) {
    return { success: false, message: "Error While Email Sent!" };
  }
}

// user email verification server action
export async function verifyUserEmail(token: string) {
  await connectDB();
  const isVerified: any = verifyToken(token);
  if (!isVerified) {
    return { success: false, message: "Invalid Token", data: null };
  }
  const user = await User.findOne({ email: isVerified?.email });
  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();
  return { success: true, message: "Email Verified" };
}

// user login action through credentials
export async function login(formData: any) {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    return { success: true, message: "Login successful!" };
  } catch (error: any) {
    if (error instanceof AuthError) {
      return { success: false, message: error?.cause?.err?.message };
    }
  }
}

export async function signInGithub() {
  try {
    await signIn("github");
  } catch (error: any) {
    console.log(error.message);
  }
}
