import { motion } from "framer-motion";
import React from "react";

const Title = () => {

    const icon = {
        hidden: {
          pathLength: 0,
          //fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          //fill: "rgba(255, 255, 255, 1)",
          transition: {
            type: "Spring",
            bounce: 1,
            duration: 20
          }
        }
    }

    return(
        <div className="title-container">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-10.3 -7.3 44.6 22.6"
                className="title-item"
            >

                <motion.path
                d="M 0 0 M 8 7 L 8 1 M 18 -2 L 18 -2 M 12 15 L -7 8 L -10 -4 M 12 15 L 31 8 L 34 -4 M -2 2 L 0 4 L -2 7 L -4 4 L -2 7 L 0 4 L -2 2 M -2 2 L -4 0 L -2 -3 L 0 0 L -2 -3 L -4 0 L -2 2 L -4 0 L -2 -3 L 0 0 L -2 -3 L -4 0 L -2 2 M 3 7 L 1 2 M 3 7 L 5 2 M 3 -3 L 5 2 M 3 -3 L 1 2 M 6 -3 L 8 1 M 10 -3 L 8 1 M 13 2 L 15 7 L 17 4 M 13 2 L 15 -3 L 17 0 M 18 2 L 18 0 M 18 2 L 18 7 M 19 2 L 19 7 M 19 2 L 21 3 L 23 7 M 19 2 L 19 -3 M 19 2 L 23 0 L 19 -3 M 26 7 L 24 2 M 26 7 L 28 2 M 26 -3 L 28 2 M 26 -3 L 24 2 M 12 -7 L 34 -4 L 31 8 M 12 -7 L -10 -4 L -7 8" stroke="#FFFFFF" stroke-width="0.3" fill="none"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    //default: { duration: 2, ease: "easeInOut" },
                    //fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                  }}
                />
            </motion.svg>
        </div>
    )
}

export default Title;