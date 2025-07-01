import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/mongodb";
import URLModel from "@/model/urlModel";

export async function GET(request) {
  try {
    await connectToDatabase();
    // console.log(request);
    const { searchParams } = new URL(request.url);
    const url = new URL(searchParams.get("url"));
    const pathname = url.pathname.split("/").pop();
    // console.log(pathname);

    const data = await URLModel.findOne({ urlID: pathname });
    if (!data) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error getting Url" }, { status: 500 });
  }
}
