import React from "react";
import { motion } from "framer-motion";
import { DraggableImage } from './draggableComp.tsx';

const ImageShower = () => {
    
    const images = []
    
    return(
        <motion.div style={{marginTop: "90vh"}}>

            
        <DraggableImage />

      
        <DraggableImage />


        <DraggableImage />


        <DraggableImage  />


        <DraggableImage  />


        <DraggableImage  />


        <DraggableImage/>

        </motion.div>
    )
}

export default ImageShower;