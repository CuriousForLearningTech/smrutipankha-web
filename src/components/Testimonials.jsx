import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testnomi1 from "../assets/Team/testnomi1.png";
import testnomi2 from "../assets/Team/testnomi2.png";
import testnomi3 from "../assets/Team/testnomi3.png";
import testnomi4 from "../assets/Team/testnomi4.png";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Shivendoo Deshmukh",
    feedback:
      "This product has truly transformed my workflow! Highly recommend.",
    avatar: testnomi1,
  },
  {
    name: "Pranay Chandrikapure",
    feedback:
      "Incredible experience! The AI-powered features are a game changer.",
    avatar: testnomi4,
  },
  {
    name: "Durgesh Firake",
    feedback: "A must-have for anyone looking for efficiency and accuracy.",
    avatar: testnomi2,
  },
  {
    name: "Prem Satpaise",
    feedback: "A must-have for anyone looking for efficiency and accuracy.",
    avatar: testnomi3,
  },
];

const Testimonials = () => {
  return (
    <section className="w-9/12 mx-auto my-48 py-20 rounded-xl bg-gray-900 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-300 mt-3">
          What our users are saying about us.
        </p>
      </div>

      {/* <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full px-4"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 flex flex-col items-center text-center"
              initial={{ opacity: 0.5, y: 0 }}
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
                <h3 className="mt-2 text-lg font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex justify-center overflow-x-auto space-x-6 p-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-4/12flex flex-col items-center text-center"
              initial={{ opacity: 50, y: 0 }}
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
                <h3 className="mt-2 text-lg font-semibold">
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
