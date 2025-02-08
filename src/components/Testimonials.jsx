import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback:
      "This product has truly transformed my workflow! Highly recommend.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Smith",
    feedback:
      "Incredible experience! The AI-powered features are a game changer.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Martinez",
    feedback: "A must-have for anyone looking for efficiency and accuracy.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-10/12 mx-auto py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-300 mt-3">
          What our users are saying about us.
        </p>
      </div>

      <div className="flex justify-center space-x-6 overflow-x-auto px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FaQuoteLeft className="text-indigo-400 text-3xl mb-3" />
            <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
            <div className="mt-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-indigo-400"
              />
              <h3 className="mt-2 text-lg font-semibold">{testimonial.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
