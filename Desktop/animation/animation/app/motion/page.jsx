"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TranslateCard = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(position - 200);
  };


  const moveRight = () => {
    setPosition(position + 200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full h-64 overflow-hidden">
        <motion.div
          className=" text-black"
          animate={{ x: position }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            mass: 1
          }}
        >
          Sliding Card
        </motion.div>
      </div>
      <div className="mt-8 space-x-4">
        <button
          onClick={moveLeft}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Move Left
        </button>
        <button
          onClick={moveRight}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Move Right
        </button>
      </div>
    </div>
  );
};

export default TranslateCard;