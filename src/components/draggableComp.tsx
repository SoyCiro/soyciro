import React from "react";

import { Variants, filterProps, motion } from "framer-motion"

const cardVariants: Variants = {
    offscreen: {
      y: 300,
      x: 300
    },
    onscreen: {
      y: 200,
      x: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariantsLeft: Variants = {
    offscreen: {
      y: 300,
      x: -300
    },
    onscreen: {
      y: 0,
      x: 0,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariantsCenter: Variants = {
    offscreen: {
      y: 500,
      opacity: 0,
    },
    onscreen: {
      y: -50,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  

export const DraggableImage = (props) => (
  <motion.div
    /*drag
    dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,}}*/
    style={{height:"100%"}}
    initial="offscreen"
    whileInView="onscreen"
    layout
    className={props.dove && props.dove === "center" ? "img-explosion-container div-center" : "boh"}
  >
    <motion.img className={props.dove} src={props.src} width={'fill-parent'} style={{overflow:'hidden', position:"relative"}} variants={props.dove && props.dove === "left" ? cardVariantsLeft : props.dove === "right"? cardVariants : cardVariantsCenter}/>
    {props.dove && props.dove !== "center" ? 
    
      <motion.img className={props.dove} src={props.src2} width={'fill-parent'} style={{overflow:'hidden', position:"relative"}} /*variants={props.dove && props.dove === "left" ? cardVariantsLeft : props.dove === "right"? cardVariants : cardVariantsCenter}*/ variants={cardVariants} />
      :
      <></>
    }
    {props.dove && props.dove === "center" ? <motion.p  className={props.dove + " explosion-text"} variants={cardVariantsCenter}>Auguri Ciro</motion.p> : ""}
  </motion.div>
)
