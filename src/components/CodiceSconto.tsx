import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";
  
const CodiceSconto = () => {
    const [text, setText] = useState();
    const [author, setAuthor] = useState();

const coglione = async () => {
    //visible === 0 ? setVisible(1) : visible === 1 ? setVisible(2) : setVisible(0);
    try{
        let res = await fetch("https://api.quotable.io/quotes/random?maxLength=100&tags=Business|Famous-Quotes|Inspirational|Wisdom|Life");
        let json = await res.json();
        console.log(json);
        
        setText(json[0].content);
        let x = Math.random();
        if(x<0.49)
            setAuthor("- " + json[0].author);
        else
            setAuthor("- Ciro Setolino")
    } catch (err){
        console.log(err); 
    }
}

//<input type="text" placeholder="Codice sconto"></input>

return (
    <section>
        <div className="section-div codice-div">
            <div className="codice-text">
                Vuoi Avere un po' di saggezza?
            </div>
            <div className="button-container">
                <button onClick={coglione}>Dammela!</button>
            </div>
            {text ?
                <>
                    <div className="coglione-text">
                        {text}
                    </div>
                    <div className="coglione-author">
                        {author}
                    </div>
                </>
            :
                <></>
            }
        </div>
    </section>
);
}

export default CodiceSconto;