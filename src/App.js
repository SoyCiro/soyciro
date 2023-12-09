import './App.css';
import { motion } from "framer-motion"
import { MyComponent } from './components/draggableComp.tsx';
import { useRef } from 'react';

function App() {
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
  return (
    <div className="App">
      


      <MyComponent constraintsRef={constraintsRef} />

      
      <MyComponent constraintsRef={constraintsRef2} />

      
      <MyComponent constraintsRef={constraintsRef2} />

      
      <MyComponent constraintsRef={constraintsRef2} />

      
      <MyComponent constraintsRef={constraintsRef2} />

      
      <MyComponent constraintsRef={constraintsRef2} />

      
      <MyComponent constraintsRef={constraintsRef2} />


    </div>
  );
}

export default App;
