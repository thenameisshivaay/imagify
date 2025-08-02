import React from 'react';
import { assets } from '../assets/assets'; 
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-16 text-center sm:text-base text-sm transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
        Turn your imagination into visuals.
      </p>

      <div className="flex flex-col gap-10 md:gap-14 md:flex-row items-center text-center md:text-left">
        <img
          src={assets.sample_img_1}
          alt="description"
          className="w-80 al:w-96 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
        />
        
        <div>
          <h2 className="text-3xl font-medium mb-4 max-w-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          
          <p className="text-gray-500 mb-4 leading-relaxed">
            Unleash your creativity with our cutting-edge AI-powered text to image generator.
            Transform your ideas into stunning visuals effortlessly. Whether you're a designer,
            marketer, or simply looking to create eye-catching content, our tool is here to help
            you bring your concepts to life. Just enter a description, and watch as the AI
            generates unique images tailored to your vision.
          </p>
          
          <p className="text-gray-500 mb-4 leading-relaxed">
            Experience the future of content creation with our AI image generator. Say goodbye
            to generic stock photos and hello to personalized visuals that truly represent your
            brand. Try it today and see the difference for yourself!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
