import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import URLModel from "@/model/urlModel";
import nano_id from "nano_id";
export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    console.log(data);
    const id = nano_id(6)
    console.log('host', process.env.host);
    
    const create = await URLModel.create({
      originalUrl: data.originalUrl,
      shortUrl: `${process.env.host}/${id}`,
      urlID: id
    });


    return NextResponse.json({
      message: "URL created successfully",
      data: create.shortUrl
    });
  } catch (error) {
    console.log(error);
    
    // console.error("Database connection failed:", error);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}
