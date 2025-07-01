"use client";
import axios from "axios";
import React from "react";

const page = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" }); 
        setIsSubmitted(true); 
      } 
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setTimeout(() => {
        setIsSubmitted(false); 
      }, 3000);
    }
  }

  return (
    <>
      <div className="w-full h-full">
        <h1 className="text-center text-3xl font-bold mt-20">Contact Us</h1>
        <p className="text-center text-gray-600 mt-5">
          For any inquiries or support, please reach out to us at:
        </p>
        <div className="flex justify-center items-center mt-10">
          <form
            className="w-full max-w-md bg-gray-50 shadow-lg p-6 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-4 w-full ">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded py-2 px-3 focus:outline-blue-500 w-full"
                onChange={handleChange}
                value={formData.name}
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded py-2 px-3 focus:outline-blue-500"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <textarea
                placeholder="Your Message"
                className="border rounded py-2 px-3 focus:outline-blue-500 h-32"
                onChange={handleChange}
                value={formData.message}
                name="message"
              ></textarea>
              <button
                type="submit"
                className={`${
                  isSubmitted ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
                }  text-white py-2 rounded transition duration-300 cursor-pointer`}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
