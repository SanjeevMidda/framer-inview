import React from "react";
import { motion } from "framer-motion";

const Block = ({ color }) => {
  return (
    <div className="container">
      <motion.h3
        style={{ color: color }}
        initial={{ opacity: 0, transform: `scale(0.5)` }}
        whileInView={{ opacity: 1, transform: `scale(1)` }}
        transition={{ duration: 2 }}
        viewport={{ amount: "all" }}
      >
        block.
      </motion.h3>
    </div>
  );
};

export default Block;
