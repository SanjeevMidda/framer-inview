import "./index.css";
import Block from "./components/Block";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function App() {
  // const container = useRef(null);
  // const ref = useRef(null);
  // const isInView = useInView({ root: container });

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="App">
      <Block color="white" />
      <Block color="orange" />
      <Block color="pink" />
      <Block color="brown" />

      <div className="textContent" ref={ref}>
        <motion.h1 animate={{ y: isInView ? "100px" : "0%" }}>ONE</motion.h1>
        <motion.h1 animate={{ y: isInView ? "-100%" : "0%" }}>TWO</motion.h1>
        <motion.h1 animate={{ y: isInView ? "100px" : "0%" }}>THREE</motion.h1>
      </div>

      {/* <div ref={ref} /> */}
    </div>
  );
}

export default App;
