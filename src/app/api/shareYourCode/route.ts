import { connectDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connectDB();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    return NextResponse.json(body, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: false, message: error.message });
  }
}
