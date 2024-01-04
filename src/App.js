import './App.css';
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { MyComponent } from './components/draggableComp.tsx';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Header from './components/header.tsx';
import ImageShower from './components/imageShower.tsx';
import Image from './components/Image.tsx';
import AuguriCiro from './components/AuguriCiro.tsx';
import Immagini from './components/Immagini.tsx';
import CodiceSconto from './components/CodiceSconto.tsx';


function App() {

  const [isOpen, setOpen] = useState(false)
  //const constraintsRef = useRef(null);
  const constraintsRef2 = useRef({
                              top: -50,
                              left: -50,
                              right: 50,
                              bottom: 50,});

                              
  const constraintsRef = useRef({
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,});

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });


    /*
    
      <Header />
      
      <ImageShower />
    */ 

      {[1, 100, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}

  return (


      <div className="porcodio" style={{scrollSnapType:"y mandatory"}}>
        <Header />
        <AuguriCiro />
        <Immagini src={process.env.PUBLIC_URL + '/img/1.JPG'} src2={process.env.PUBLIC_URL + '/img/2.JPG'} src1Orizzontale={true}/>
        <Immagini src={process.env.PUBLIC_URL + '/img/3.JPG'} src2={process.env.PUBLIC_URL + '/img/4.JPG'} />
        <Immagini src={process.env.PUBLIC_URL + '/img/5.JPG'} src2={process.env.PUBLIC_URL + '/img/6.JPG'} src2Orizzontale={true}/>
        <Immagini src={process.env.PUBLIC_URL + '/img/7.JPG'} src2={process.env.PUBLIC_URL + '/img/8.JPG'} src2Orizzontale={true}/>
        <Immagini src={process.env.PUBLIC_URL + '/img/9.JPG'} src2={process.env.PUBLIC_URL + '/img/10.JPG'} />
        <Immagini src={process.env.PUBLIC_URL + '/img/11.JPG'} src2={process.env.PUBLIC_URL + '/img/12.JPG'} />
        <Immagini src={process.env.PUBLIC_URL + '/img/13.JPG'} src2={process.env.PUBLIC_URL + '/img/14.JPG'} />
        <Immagini src={process.env.PUBLIC_URL + '/img/15.JPG'} src2={process.env.PUBLIC_URL + '/img/16.JPG'} />
        <motion.div className="progress" style={{ scaleX }} />
        <CodiceSconto />
      </div>

  );
}

export default App;
