import React from "react";
import jcblogo from '../assets/images/jcblogo.png';
import mvnlogo from '../assets/images/mvnlogo.jpg';
import { motion } from "framer-motion";

const Education=()=>{
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
         className="mb-36" id="education">
      <div className="relative mb-32">
        <div className="absolute top left-4 ">
          <p className="text-8xl font-bold text-gray-200">A C A D E M I C S</p>
        </div>
        <p className="text-6xl absolute font-extralight text-[#6f3257] ">Education</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="mt-4">
          <h1 className="font-bold text-xl">Bachelor's Degree in Computer Engineering with Data Science</h1>
          <p className="mb-4">2020-2024</p>
          <p className="">J.C. Bose Uniersity of Science and Technology, YMCA</p>
          <p>CGPA(till 4th Semester): <b>9.207</b></p>
          </div>
          <div className="pl-12 pt-4">
            <img src={jcblogo} width={100}></img>
          </div>
        </div>

        <div className="flex flex-row mt-8">
          <div className="mt-4">
          <h1 className="font-bold text-xl">HighSchool</h1>
          <p className="mb-4">2019-2020</p>
          <p className="">Modern Vidya Niketan, Sector-17, Fraidabad</p>
          <p>CBSE percentage: <b>95.6%</b></p>
          </div>
          <div className="pl-80 pt-8">
            <img src={mvnlogo} width={100}></img>
          </div>
        </div>
      </div>
      </motion.div>
    )
}
export default Education