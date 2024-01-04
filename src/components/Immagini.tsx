import { MotionValue, Variants, motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";
import Header from "./header.tsx";
import { DraggableImage } from "./draggableComp.tsx";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
  
function Immagini(props: any) {
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
const y = useParallax(scrollYProgress, 200);

const cardVariantsLeft: Variants = {
    offscreen: {
      y: 300,
      x: 300
    },
    onscreen: {
      y: 0,
      x: -50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      x: -300
    },
    onscreen: {
      y: 0,
      x: 50,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  useEffect(()=> {
    console.log(props.src1Orizzontale);
    
  }, [])

return (
    <section>
        <motion.div className="section-div" 
                    initial="offscreen"
                    whileInView="onscreen">
            <motion.div className={props.src1Orizzontale ? "img-container orizzontale" : "img-container"}>
                <motion.img
                  src={props.src}
                  variants={cardVariants}
                  drag
                  />
            </motion.div>
            <motion.div className={props.src2Orizzontale ? "img-container orizzontale" : "img-container"}>
                <motion.img
                  style={{zIndex:10}}
                  src={props.src2}
                  variants={cardVariantsLeft}
                  drag
                  />
            </motion.div>
        </motion.div>
    </section>
);
}

export default Immagini;