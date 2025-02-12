import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="w-9/12 mx-auto my-8 py-20 rounded-xl border-2 border-cyan-400 bg-gray-100 text-gray-900 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-3">
          A step-by-step guide to understanding our system.
        </p>
      </div>

      {/* Architecture Box */}
      <motion.div
        className="mx-auto w-10/12 md:w-8/12 h-96 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gray-800">[System Architecture Placeholder]</span>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
