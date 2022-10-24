import React from "react";
import { motion } from "framer-motion";

const Volunteering=()=>{
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
        }} className="mb-28" id="volunteer">
      <div className="relative mb-32">
        <div className="absolute top left-4 ">
          <p className="text-8xl font-bold text-gray-200">C O M M U N I T Y</p>
        </div>
        <p className="text-6xl absolute font-extralight text-[#6f3257] ">Volunteering</p>
      </div>

      <div className="flex flex-col">

<div>
  <h1 className="text-2xl font-bold mb-2">University Computer Center and Digital Affairs cell</h1>
  <a href="https://www.instagram.com/ucc_digitalaffairscell/" className="text-[#6f3257]">Instagram Link</a>
  <ul className="list-disc p-5">
    <li>Helped in organising university's biggest event- Digi Fiesta</li>
    <li>Contributed in development of University's website(FrontEnd)</li>
  </ul>

</div>
<div>
  <h1 className="text-2xl font-bold mb-2">Career and Counselling Cell</h1>
  <a href="https://www.instagram.com/career_counselling_cell_ymca/" className="text-[#6f3257]">Instagram Link</a>
  <ul className="list-disc p-5">
    <li>Part of the Content writing and anchoring team</li>
    <li>Actively helped in managing the orientation (induction) in the university with the team</li>
  </ul>
</div>
<div>
  <h1 className="text-2xl font-bold mb-2">Samarapan-The Technophilia</h1>
  <a href="https://www.instagram.com/samarpan__the__technophilia/" className="text-[#6f3257]">Instagram Link</a>
  <ul className="list-disc p-5">
    <li>Content Creator</li>
    <li>Actively Participated in the project displaying on the Foundation Day and Induction</li>
  </ul>
</div>

</div>
      </motion.div>
    )
}
export default Volunteering