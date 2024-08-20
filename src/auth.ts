import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "./dbConfig/dbConfig";
import User from "./models/user";
import { comparePassword } from "./lib/hashedPassword";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),

    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User Does Not Exist!");
          } else {
            const isMatched = await comparePassword(
              credentials?.password,
              user.password
            );
            console.log(isMatched, "isMatched");
            if (!isMatched) {
              throw new Error("Password Does Not Match");
            } else {
              return user;
            }
          }
        } catch (error: any) {
          throw new Error(error?.message);
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
});
