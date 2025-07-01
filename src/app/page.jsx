"use client";
import axios from "axios";
import { useRef, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
export default function Home() {
  
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const shortUrlref = useRef(null);
  async function create(e) {
    try {
      e.preventDefault();
      const response = await axios.post("/api/create", {
        originalUrl: url,
      });
      console.log(response);
      setShortenedUrl(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function copy(e) {
    e.preventDefault();
    if (shortenedUrl) {
      try {
        setIsCopied(true);
        await navigator.clipboard.writeText(shortenedUrl);
        // alert("Shortened URL copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
        // alert("Failed to copy the URL.");
      } finally {
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }
    }
  }

  return (
    <>
      <div className="h-auto w-full px-5 lg:px-[50px] 2xl:px-[120px]">
        <h1 className="text-center text-xl md:text-3xl  lg:text-4xl font-bold text-gray-800 mt-20">
          Shorten your long links instantly and easily with Shorty!
        </h1>
        <form
          onSubmit={create}
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
            shorten
          </button>
        </form>
        <p className=" text-center mt-5 text-md md:text-xl text-gray-500">
          No sign-up required, Safe, fast and free
        </p>
        {shortenedUrl && (
          <div className="shortenedLink flex justify-center items-center flex-col mt-20">
            <p className="text-xl md:text-3xl flex justify-center items-center gap-2">
              {" "}
              <FaCheckCircle className="text-green-500" />
              Your shortened URL:
            </p>
            <div className="url bg-gray-100  mt-5 w-full py-2 px-2 lg:w-1/2 flex gap-2 justify-between items-center rounded">
              <input
                type="text"
                disabled
                className="w-full rounded px-2 text-gray-700 font-medium tracking-wide"
                value={shortenedUrl}
                ref={shortUrlref}
              />
              <button
                onClick={copy}
                className="bg-white py-2 px-4 rounded shadow-lg cursor-pointer"
              >
                {isCopied ? (
                  <span className="text-green-500 font-medium">Copied!</span>
                ) : (
                  <span className="text-blue-500 font-medium">Copy</span>
                )}
              </button>
            </div>
          </div>
        )}

        
      </div>
    </>
  );
}
