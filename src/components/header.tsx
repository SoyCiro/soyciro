import React, { useState } from "react";
import { MotionValue, Variants, motion, useScroll, useTransform} from "framer-motion";
import { useEffect, useRef } from 'react';
import '../App.css';
import Title from "./Title.tsx";

const Header = () => {


    return(
        <section>
            <div className="section-div head">
                <Title />
            </div>
        </section>
    )
}

export default Header;