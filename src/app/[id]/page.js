import connectToDatabase from "@/lib/mongodb";
import URLModel from "@/model/urlModel";
import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";

async function getUrl(id) {
  try {
    await connectToDatabase();
    const data = await URLModel.findOne({ urlID: id });
    console.log(data);
    if (!data) {
      return null;
    }
    data.clicks += 1; 
    await data.save(); 
    return data.originalUrl;
  } catch (error) {}
}

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const url = await getUrl(id);
  if (!url) {
    return <div>URL not found</div>;
  }

  redirect(url);
  return <div>Redirecting...</div>;
};

export default page;
