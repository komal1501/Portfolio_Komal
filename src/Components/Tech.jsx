import React from "react";
import javas from '../assets/images/javas.jpeg';
import java from '../assets/images/java.png';
import cpp from '../assets/images/cpp.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import mongodb from '../assets/images/mongodb.png'
import sql from '../assets/images/sql.png'
import react from '../assets/images/react.png'
import GitHubIcon from '@mui/icons-material/GitHub';


import python from '../assets/images/python.png'

import { motion } from "framer-motion";
const Tech=()=>{
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
          duration:1,
      }}
      viewport={{
          margin:'0px 0px -50px 0px',
          once: true
      }}  
        className="mb-36" id="tech">
        <div className="relative mb-32">
          <div className="absolute top left-4 ">
            <p className="text-8xl font-bold text-gray-200">T E C H S T A C K</p>
          </div>
          <p className="text-6xl absolute font-extralight text-[#6f3257] ">Tech I'm Familiar with</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col pl-7">
            
            
            <div className="flex flex-row mb-7 text-2xl">
              <img src={html} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">HTML</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={css} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">CSS</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={javas} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">JavaScript</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={mongodb} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">Mongo DB</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={react} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">React</p>
            </div>
          </div>
          <div className="flex flex-col">
          <div className="flex flex-row mb-7 text-2xl">
              <img src={java} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">Java</p>
            </div>
          <div className="flex flex-row mb-7 text-2xl">
              <img src={cpp} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">C++</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={python} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">Python</p>
            </div>
            <div className="flex flex-row mb-7 text-2xl">
              <img src={sql} alt="error"  className="" width={25}></img>
              <p className="pl-4 font-light">SQL</p>
            </div>
          
            <div className="flex flex-row mb-7 text-2xl">
                <div className={'w-{25}'}><GitHubIcon/></div>
              {/*<img src={javas} alt="error"  className="" width={25}><GitHubIcon></img>*/}
              <p className="pl-4 font-light">GitHub</p>
            </div> 
          </div>
         </div>
        </motion.div>
    )
}
export default Tech