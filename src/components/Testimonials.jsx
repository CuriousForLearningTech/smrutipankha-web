import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import meta from "../Data/meta";

const testimonials = meta.Testimonials || [];

const Testimonials = () => {
  return (
    <section className="w-full md:w-9/12 mx-auto my-24 py-16 px-4 md:px-8 bg-gray-900 text-white rounded-sm md:rounded-xl relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-300 mt-3 text-sm md:text-base">
          What our users are saying about us.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 overflow-x-auto md:overflow-hidden p-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center text-center"
              initial={{ opacity: 0.5, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <FaQuoteLeft className="text-indigo-400 text-3xl mb-3" />
              <p className="text-gray-300 italic text-sm md:text-base">
                "{testimonial.feedback}"
              </p>
              <div className="mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full mx-auto border-2 border-indigo-400"
                />
                <h3 className="mt-2 text-base md:text-lg font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
