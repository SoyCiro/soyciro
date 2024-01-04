import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import Header from "./header.tsx";
import { DraggableImage } from "./draggableComp.tsx";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
  
function AuguriCiro() {
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
const y = useParallax(scrollYProgress, 200);

return (
    <section>
        <div className="section-div-auguri">
            <div className="explosion-container">
                <img style={{maxWidth: "100vw"}} src={process.env.PUBLIC_URL + '/img/explosion.gif'}/>
            </div>
            <div className="auguri-ciro">
                Auguri Ciro!
            </div>
            <div className="img-container" style={{display: "flex", justifyContent:"center"}}>
                <img src={process.env.PUBLIC_URL + '/img/17.JPG'}/>
            </div>
        </div>
    </section>
);
}

export default AuguriCiro;