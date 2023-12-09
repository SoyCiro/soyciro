import React from "react";

import { Variants, filterProps, motion } from "framer-motion"

const cardVariants: Variants = {
    offscreen: {
      y: 300,
      x: 300
    },
    onscreen: {
      y: 50,
      x: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  

export const MyComponent = (props) => (
  <motion.div
    drag
    dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,}}
    style={{width:250, height:250, backgroundColor:'red', overflowX:'hidden'}}
    initial="offscreen"
    whileInView="onscreen"
  >
    <motion.img src='https://il5.picdn.net/shutterstock/videos/3025957/thumb/8.jpg?i10c=img.resize(height:72)' width={'fill-parent'} style={{overflow:'hidden'}} variants={cardVariants}/>
</motion.div>
)
