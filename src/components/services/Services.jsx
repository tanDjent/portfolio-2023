import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I belive in growing
          <br /> and moving forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="flex align-center justify-center text-noselect title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Plan</motion.b>
            <motion.span>-Code-</motion.span>
            <motion.b whileHover={{ color: "orange" }}>Maintain</motion.b>
          </h1>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          style={{ marginRight: "50px" }}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.div className="flex align-center">
            <motion.img src="peoplebox-logo.svg" className="peoplebox-icon" />
            <h1>Peoplebox</h1>
          </motion.div>
          <motion.div className="flex flex-col box-content">
            <div></div>
          </motion.div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <motion.div className="flex align-center">
            <motion.img src="peoplebox-logo.svg" className="peoplebox-icon" />
            <h2>Peoplebox</h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
