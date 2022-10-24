import React from "react";
import { motion } from "framer-motion";

const AboutMe=()=>{
    return(
        <motion.div initial={{
          opacity:-1,
          x:200
      }}
      whileInView={{
          opacity:1,
          x:0
      }}
      transition={{
          duration:1,
      }}
      viewport={{
          margin:'0px 0px -50px 0px',
          once: true
      }} 
        className="mb-36 " id="aboutme">
      <div className="relative mb-32">
        <div className="absolute top left-4 ">
          <p className="text-8xl font-bold text-gray-200">A B O U T</p>
        </div>
        <p className="text-6xl text-[#6f3257] absolute font-extralight">A little about me</p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Hello!</p>
          <p className="mt-16 text-justify">Pre-final year student at JC Bose University of Science & Technology, YMCA pursuing degree, Bachelor of Technology in Computer Engineering with specialization in Data Science. Focused on learning Data Structures and Algorithms, Data Science & Machine Learning. Tried my hand at Mobile App development in Java as well as Web App Development with Django. Interested in designing UI/UX of websites and apps.</p>
        </div>
        <div className="flex flex-col"><p className="font-bold text-3xl">My Skills</p>
        <p className="mt-6 text-2xl mb-2">FrontEnd</p>
        <div className="w-full h-6 bg-gray-200 rounded-lg">
          <div className="bg-[#6f3257] text-white rounded-lg w-3/4">75%</div>
        </div>
        <p className="mt-4 text-2xl mb-2">Competitive Programming</p>
        <div className="w-full h-6 bg-gray-200 rounded-lg">
          <div className="bg-[#6f3257] rounded-lg text-white w-1/4">45%</div>
        </div>
        <p className="mt-4 text-2xl mb-2">Data Structures and Algorithms</p>
        <div className="w-full h-6 bg-gray-200 rounded-lg">
          <div className="bg-[#6f3257] text-white rounded-lg w-2/4">65%</div>
        </div>
        
        </div>

      </div>
      </motion.div>
    )
}
export default AboutMe