import React from "react";
import dp from '../assets/images/displaypic.png';
import {motion} from "framer-motion";

const Landing=()=>{
    return(
    <div className="bg-[#6f3257] h-screen ">
      <motion.div initial={{
            opacity:0,
            x:-100
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
       className="flex justify-around p-8 text-2xl text-white">
        <a href="https://docs.google.com/document/d/1Cy_v9WnMNT68_4NB1x4FxDQpcfkp2YxztKTfR8Z-4iQ/edit?usp=sharing" target="_blank" className=""><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">Resume</h1></a>
        <a href="#aboutme"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">About Me</h1></a>
        <a href="#tech"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">TechStack</h1></a>
        <a href="#education"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">Education</h1></a>
        <a href="#projects"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">Projects</h1></a>
        <a href="#volunteer"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">Volunteer Experience</h1></a>
        <a href="#contact"><h1 className="hover:scale-105 duration-300 hover:cursor-pointer">Contact</h1></a>
      </motion.div>
      <div className="main pl-48 pr-48 flex flex-row space-x-56 pt-52 bg-slate-200 pb-48">
      <div className=" flex flex-col justify-center">
      <motion.div  initial={{
            opacity:0,
            y:-200
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:1,
        }}
        viewport={{
            margin:'0px 0px -50px 0px',
            once: true
        }} className="text-8xl font-extralight">Komal Bhatia</motion.div>
      <motion.div  initial={{
            opacity:0,
            x:-100
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
            once: false
        }} className="ml-2 mt-4 text-xl font-extralight text-[#6f3257] ">Full Stack Developer</motion.div>
      </div>
      <motion.div  initial={{
            opacity:0,
            
        }}
        whileInView={{
            opacity:1,
            
        }}
        transition={{
            duration:2,
        }}
        viewport={{
            margin:'0px 0px -50px 0px',
            once: false
        }} className="hover:scale-105 duration-200"><a href="https://docs.google.com/document/d/1Cy_v9WnMNT68_4NB1x4FxDQpcfkp2YxztKTfR8Z-4iQ/edit" target="__blank"><img src={dp} width={300} className=""></img></a>
        </motion.div>
      </div> 
      </div>
      
    )
}
export default Landing