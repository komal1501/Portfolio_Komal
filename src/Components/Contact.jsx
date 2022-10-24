import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";

const Contact=()=>{
    return(
      <motion.div initial={{
        opacity:-1,
        y:-100
    }}
    whileInView={{
        opacity:1,
        y:0
    }}
    transition={{
        duration:0.5,
    }}
    viewport={{
        margin:'0px 0px -50px 0px',
        once: true
    }} className="mb-8" id="contact">
      <div className="relative mb-32">
        <div className="absolute top left-4 ">
          <p className="text-8xl font-bold text-gray-200">C O N T A C T</p>
        </div>
        <p className="text-6xl absolute font-extralight text-[#6f3257] ">Let's Talk!</p>
      </div>
      <div className="flex flex-row space-x-8">
        <div><a href="https://www.linkedin.com/in/komal-bhatia-001877201/" className="hover:text-black text-[#6f3257]" target="__blank"><MailIcon/></a></div>
        <div><a href="https://www.linkedin.com/in/komal-bhatia-001877201/" className="hover:text-black text-[#6f3257]" target="__blank"><LinkedInIcon/></a></div>
        <div><a href="https://twitter.com/Kkayybeee" className="hover:text-black text-[#6f3257]" target="__blank"><TwitterIcon/></a></div>
        <div><a href="https://www.facebook.com/komal.bhatia.33234/" className="hover:text-black text-[#6f3257]" target="__blank"><FacebookIcon/></a></div>
        <div><a href="https://www.instagram.com/kkomalbhatia/" className="hover:text-black text-[#6f3257]" target="__blank"><InstagramIcon/></a></div>
      </div>

      </motion.div>
    )
}
export default Contact