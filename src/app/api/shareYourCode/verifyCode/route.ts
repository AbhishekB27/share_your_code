import { connectDB } from "@/dbConfig/dbConfig";
import Code from "@/models/codeModel";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

connectDB();
export async function POST(request: NextRequest) {
  const url = request.nextUrl;
  const uniqueKey = url.searchParams.get("uniqueKey");
  const { pin } = await request.json();
  console.log(pin, "pin");
  console.log(cookies().getAll(), "cookies v");
  const code = await Code.findOne({ uniqueKey });
  if (code.secretKey === pin) {
    const response = NextResponse.json({
      success: true,
      msg: "code matched",
      uniqueKey: uniqueKey,
    });
    response.cookies.set({
      name: "isValid",
      value: "true",
      maxAge: 60 * 5, // 5 minute in seconds
      expires: new Date(Date.now() + 60 * 5 * 1000), // 5 minute from now
      path: "/",
      // httpOnly: true,
      // secure: true,
      // sameSite: "lax",
    });
    return response;
  }
  return NextResponse.json({
    success: false,
    msg: "Code Not Matched",
    uniqueKey: uniqueKey,
  });
}
