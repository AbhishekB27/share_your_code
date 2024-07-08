import { connectDB } from "@/dbConfig/dbConfig";
import Code from "@/models/codeModel";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
type Params = {
  params: {
    uniqueKey: string;
  };
};
connectDB();
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { uniqueKey } = params;
    const url = request.nextUrl;
    const isPrivate = url.searchParams.get("isPrivate");

    console.log("url: " + isPrivate);
    const isValid = cookies().get("isValid")?.value;
    console.log("cookies", cookies().getAll());
    const code = await Code.findOne({ uniqueKey });
    if (isPrivate && !isValid) {
      console.log("Yes It's Private");
      const message = {
        message: "Code is private",
        code: null,
        status: true,
      };
      const response = NextResponse.json(message, {
        status: 200,
      });

      return response;
    }
    if (!code) {
      return NextResponse.json(
        { status: false, message: "Data Not Found", data: null },
        { status: 200 }
      );
    }
    return NextResponse.json(code, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: false, message: error.message });
  }
}
