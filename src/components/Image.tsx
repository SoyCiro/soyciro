import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import Header from "./header.tsx";
import { DraggableImage } from "./draggableComp.tsx";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
  
function Image({ id }: { id: number }) {
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
const y = useParallax(scrollYProgress, 200);

const header = <Header />;
//const img = <img src={process.env.PUBLIC_URL + '/img/'+ id +'.JPG'} alt="A London skyscraper" />;

const img = <DraggableImage src={process.env.PUBLIC_URL + '/img/'+ id +'.JPG'} src2={process.env.PUBLIC_URL + '/img/' + id + '' + id + '.JPG'} dove="left"/>
const img2 = <DraggableImage src={process.env.PUBLIC_URL + '/img/' + id + '' + id + '.JPG'} dove="right" />

/*const getSection = (number): ReactNode => {
    if (number == 1){
        return 
            <div ref={ref}>
                <Header/>
            </div>
    }
    else{
        return 
        <div ref={ref}>
            <img src={`/${id}.jpg`} alt="A London skyscraper" />
        </div>
    }

}*/

/*

                        <div className="div-in-section" ref={ref}>
                            {img2}
                        </div>
*/

return (
    <section>
        {id === 1 ? 
            <div className="div-in-section" ref={ref}>
                {header}
            </div>
            :
            id === 100 ? 
                    <div className="div-in-section div-center" ref={ref}>
                        <div style={{height:0}}>
                            <img className="explosions" src={process.env.PUBLIC_URL + '/img/explosion.gif'}/>
                        </div>
                        <DraggableImage src={process.env.PUBLIC_URL + '/img/'+ id +'.JPG'} dove="center"/>
                    </div>
                :
                    <>
                        <div className="div-in-section" ref={ref}>
                            {img}
                        </div>
                    </>
        }
    </section>
);
}

export default Image;