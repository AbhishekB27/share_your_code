import { connectDB } from "@/dbConfig/dbConfig";
import generateRandomString from "@/lib/generateRandomString";
import Code from "@/models/codeModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (body?.isPrivate) {
      const secretKey = generateRandomString(6);
      body.secretKey = secretKey;
    }

    const existingCode = await Code.findOne({ uniqueKey: body.uniqueKey });
    if (existingCode) {
      return NextResponse.json(
        { status: false, message: "Already Exist...", data: null },
        { status: 404 }
      );
    }

    const newCode = new Code({ ...body });
    console.log(newCode);
    await newCode.save();

    return NextResponse.json(
      { status: true, message: "Successfully Created..." },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: false, message: error.message });
  }
}
