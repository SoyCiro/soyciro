import React, { useState } from "react";
import { MotionValue, Variants, motion, useScroll, useTransform} from "framer-motion";
import { useEffect, useRef } from 'react';
import '../App.css';
import Title from "./Title.tsx";

const Header = () => {


    return(
        <section>
            <div>
                <motion.div layout className='header-container'>
                    <Title />
                </motion.div>
            </div>
        </section>
    )
}

export default Header;