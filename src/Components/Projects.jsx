import React from "react";
import { motion } from "framer-motion";

const Projects=()=>{
    return(
        <motion.div initial={{
            opacity:-1,
            x:-100
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        transition={{
            duration:0.5,
        }}
        viewport={{
            margin:'0px 0px -50px 0px',
            once: true
        }} 
        className="mb-28" id="projects">
      <div className="relative mb-32">
        <div className="absolute top left-4 ">
          <p className="text-8xl font-bold text-gray-200">P O R T F O L I O</p>
        </div>
        <p className="text-6xl absolute font-extralight text-[#6f3257] ">Projects</p>
      </div>
      <div className="flex flex-col">

      <div>
        <h1 className="text-2xl font-bold mb-2">Shortcut with Voice</h1>
        <a href="#" className="text-[#6f3257] ">Github Link</a>
        <ul className="list-disc p-5">
          <li>Software tells us the shortcut for the typed/spoken out command through voice</li>
          <li>Used Python Speech Recognition Library</li>
        </ul>

      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">VOTEBLOCK-An Online Voting Application</h1>
        <a href="#" className="text-[#6f3257]">Github Link</a>
        <ul className="list-disc p-5">
          <li>Online voting application for university students for club positions or class representatives to get the majority decision.</li>
          <li>Used Firebase Authentication and Firebase Fire store Database to store student information and no of votes</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">UNITRADE</h1>
        <a href="#" className=" text-[#6f3257]">Github Link</a>
        <ul className="list-disc p-5">
          <li> An E-commerce website for university students to sell their stuff to someone who needs it.</li>
          <li>FrontEnd was made with HTML/CSS and JavaScript</li>
          <li>Python was used in the Backend</li>
          <li>Project is based on Django Platform</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Movie Recommendation System</h1>
        <a href="#" className="text-[#6f3257]">Github Link</a>
        <ul className="list-disc p-5">
          <li> Software recommends movies to the users based on their favorite movie.</li>
          <li>Uses Cosine-Similarity Algorithm and various python libraries(numpy, pandas etc)</li>
          <li>GUI made using Tkinter</li>
        </ul>
      </div>
      </div>
      </motion.div>
    )
}
export default Projects