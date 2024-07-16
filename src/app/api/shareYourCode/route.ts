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
    if (body.secretKey) {
      return NextResponse.json(
        {
          status: true,
          message: "Successfully Created...",
          data: { secretKey: newCode.secretKey },
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: true,
        message: "Successfully Created...",
        data: {},
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: false, message: error.message });
  }
}
// Get all public snippets

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const search = url.searchParams.get("search");
  console.log(search, "search");
  if (search) {
    const searchCodes = await Code.find({
      title: { $regex: `^${search}`, $options: "i" }, // 'i' for case-insensitive search
    });
    return NextResponse.json({
      status: true,
      data: searchCodes,
      message: "Successfully retrieved...",
    });
  } else {
    const codes = await Code.find({ isPrivate: false });
    return NextResponse.json({
      status: true,
      data: codes,
      message: "Successfully retrieved...",
    });
  }
}
