"use client";
import axios from "axios";
import React from "react";
import Advertisement from "@/components/Advertisement";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

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
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <div className="px-5 lg:px-[50px] 2xl:px-[120px] py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as quickly as possible.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <FaEnvelope className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">support@shorty.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <FaPhone className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center mb-4">
                <FaMapMarkerAlt className="text-3xl text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Nepal</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-5 lg:px-[50px] 2xl:px-[120px] py-10">
          <div className="max-w-2xl mx-auto">
            <form
              className="bg-white rounded-xl shadow-xl p-8 md:p-10"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-200 bg-gray-50"
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-200 bg-gray-50"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition duration-200 bg-gray-50 resize-none"
                    rows="6"
                    onChange={handleChange}
                    value={formData.message}
                    name="message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <FaCheckCircle /> Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="px-5 lg:px-[50px] 2xl:px-[120px] py-10">
          <Advertisement />
        </div>
      </div>
    </>
  );
};

export default page;
