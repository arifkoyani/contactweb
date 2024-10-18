import React from "react";
import { FaBold, FaItalic, FaUnderline, FaCode, FaImage } from "react-icons/fa";

const ContentFormCard = () => {
  return (
    <div className="w-[500px] mx-auto h-[350px] p-4 bg-white rounded-lg shadow-xl">
      {/* Header with the Save Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="w-4 h-4 flex space-x-1">
          <span className="block w-2 h-2 rounded-full bg-red-400"></span>
          <span className="block w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="block w-2 h-2 rounded-full bg-green-400"></span>
        </div>
        <button className="px-4 py-2 text-white bg-[#99d9ea] rounded-md">Save</button>
      </div>

      {/* Name and Categories */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-900">Name</label>
          <input
            type="text"
            placeholder="Type your title"
            className="p-2 mt-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-900">Categories</label>
          <input
            type="text"
            placeholder="Type your categories"
            className="p-2 mt-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-blue-900">Description</label>
        <div className="p-4 mt-2 border rounded-lg bg-gray-100">
          <div className="flex space-x-2 mb-2">
            <button className="text-gray-500 hover:text-black">
              <FaBold />
            </button>
            <button className="text-gray-500 hover:text-black">
              <FaItalic />
            </button>
            <button className="text-gray-500 hover:text-black">
              <FaUnderline />
            </button>
            <button className="text-gray-500 hover:text-black">
              <FaCode />
            </button>
            <button className="text-gray-500 hover:text-black">
              <FaImage />
            </button>
          </div>
          <textarea
            placeholder="Type your description"
            className="w-full h-24 p-2 border-none bg-gray-100 focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContentFormCard;
