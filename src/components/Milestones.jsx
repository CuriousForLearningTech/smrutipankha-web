import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "./Carousel";
import meta from "../Data/meta";

const aboutData = meta.MilestonesData || [];

const AboutSection = () => {
  return (
    <section
      id="milestones"
      className="md:w-9/12 mx-auto my-48 py-10 rounded-2xl md:rounded-4xl bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Milestones</h2>
        <p className="text-gray-300 mt-3">
          Discover our journey, values, and mission.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Central Line */}
        <div className="absolute w-1 h-full bg-purple-500 top-0 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        {/* Content */}
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full md:max-w-6xl my-4 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mx-4 border-2 grid grid-flow-col grid-rows-2 bg-gray-800 p-6 rounded-lg shadow-lg w-120 field-sizing-content">
              <div className="field-sizing-content">
                <div className="text-purple-300">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
              <div>
                <Carousel images={item.Images} />
              </div>
            </div>
            {/* Branch Line */}
            <div
              className={`absolute h-1 w-10 bg-purple-500 ${
                index % 2 === 0 ? "right-full" : "left-full"
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
