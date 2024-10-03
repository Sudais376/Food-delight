import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="">
          <img
            className="w-full h-1/2 md:h-[600px] object-cover"
            src="/Hero2.png"
            alt=""
          />
        </div>
        <div className="absolute top-[25%] md:left-1/2 transform md:-translate-x-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -50 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 1 }} // Animation duration
            className="text-[#F5F5F5] bg-slate-500 opacity-[0.9] text-center pb-1 text-3xl md:text-5xl font-bold"
          >
            Fresh, Delicious Meals Delivered to Your Doorstep
          </motion.h1>
          <div className="flex justify-center py-8">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black text-[#FF4C4C] hover:bg-[#FF4C4C] hover:text-[#ffffff] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
            >
              Order Now
            </motion.button>
            <Link to="/menu">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#FF4C4C] text-[#FFFFFF] hover:bg-[#000000] transition transform hover:-translate-y-[2px] font-bold px-6 py-2 rounded-md border border-white mx-2"
              >
                See Menu
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
