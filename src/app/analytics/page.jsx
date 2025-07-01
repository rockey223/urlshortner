"use client";
import axios from "axios";
import { set } from "mongoose";
import Link from "next/link";
import React from "react";
import { SiGoogleanalytics } from "react-icons/si";

const page = () => {
  const [url, setUrl] = React.useState("");
  const [stats, setStats] = React.useState();
  const [error, setError] = React.useState("");
  async function getStats(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `/api/getUrl?url=${encodeURIComponent(url)}`
      );
      setStats(response.data.data);
      setError("");
    } catch (error) {
      setError("URL not found or invalid");
      setStats(null);
    }
  }

  function timeAgo(dateStr) {
    const now = new Date();
    const past = new Date(dateStr);
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / 1000 / 60);
    const hours = Math.floor(diffMs / 1000 / 60 / 60);
    const days = Math.floor(diffMs / 1000 / 60 / 60 / 24);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  }
  return (
    <>
      <div className="px-5 lg:px-[50px] 2xl:px-[120px]">
        <h1 className="text-center text-xl md:text-3xl  lg:text-4xl font-bold text-gray-800 mt-20 flex justify-center items-center gap-3">
          <SiGoogleanalytics className="text-5xl text-blue-500" /> Check
          Analytics of your shortened links with Shorty!
        </h1>
        <form
          onSubmit={getStats}
          className="input_container w-full flex justify-center items-center mt-15 gap-x-5"
        >
          <input
            type="text"
            className="border rounded w-full lg:w-1/2 py-2 px-2 bg-gray-100 text-gray-700 border-none outline-1  focus:outline-blue-500 focus:outline-2"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            placeholder="Enter your URL here"
            name="originalUrl"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 font-medium text-white capitalize rounded cursor-pointer"
          >
            Get Analytics
          </button>
        </form>
        {stats && (
          <div>
            <h1 className="text-center text-xl md:text-3xl  lg:text-4xl font-bold text-gray-800 mt-20">
              Analytics for:{" "}
              <Link href={url} className="text-blue-500">
                {url}
              </Link>
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center mt-20 gap-20">
              <div className="w-full hidden lg:block">
                {/* <div className="bg-gray-100 p-5 rounded shadow-lg w-full h-[200px] aspect-square">
                    <h2 className="text-xl font-bold">Total Clicks: 100</h2>
                    <p className="text-gray-600">Last Clicked: 2023-10-01</p>
                </div> */}
              </div>
              <div className="w-full">
                <div className="bg-gray-100 p-5 rounded shadow-lg w-full h-[150px] aspect-square flex flex-col justify-center items-center gap-5">
                  <h2 className="text-xl md:text-3xl  font-medium capitalize">
                    Total Clicks
                  </h2>
                  <p className="text-xl md:text-3xl  lg:text-4xl text-gray-600">
                    {stats.clicks}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="bg-gray-100 p-5 rounded shadow-lg w-full h-[150px] aspect-square flex flex-col justify-center items-center gap-5">
                  <h2 className="text-xl md:text-3xl   font-medium capitalize">
                    last Visited
                  </h2>
                  <p className="text-xl md:text-3xl  lg:text-4xl text-gray-600">
                    {stats.clicks <= 0
                      ? "Not visited yet"
                      : timeAgo(stats.updatedAt)}
                  </p>
                </div>
              </div>

              <div className="w-full hidden lg:block">
                {/* <div className="bg-gray-100 p-5 rounded shadow-lg w-full h-[200px] aspect-square">
                    <h2 className="text-xl font-bold">Total Clicks: 100</h2>
                    <p className="text-gray-600">Last Clicked: 2023-10-01</p>
                </div> */}
              </div>
            </div>
          </div>
        )}
        {error && <div className="text-red-500 text-center mt-5">{error}</div>}
      </div>
    </>
  );
};

export default page;
