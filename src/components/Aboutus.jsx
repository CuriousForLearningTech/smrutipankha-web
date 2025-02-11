import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaAward, FaFlask, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/Events/piwot.jpeg";
import img2 from "../assets/Events/team.jpeg";

const Carousel = ({ images }) => {
  // Destructure images correctly
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      className="mt-2 w-full max-w-xl max-h-lg"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <div
            className="flex items-center justify-center text-white text-center bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const aboutData = [
  {
    icon: <FaCogs size={30} />,
    title: "Efforts",
    description: "Continuous innovation and dedicated research.",
  },
  {
    icon: <FaAward size={30} />,
    title: "Achievements",
    description: "Multiple awards and industry recognition.",
  },
  {
    icon: <FaFlask size={30} />,
    title: "Research",
    description:
      "Attended & Presented the Research Paper on ICEASD Conferance at Governement College of Engineering, Amravati.",
  },
  {
    icon: <FaLightbulb size={30} />,
    title: "Guids and Mentor",
    description:
      "We are guided by Dr. A. W Bhade & Prof. S. Lohi. Motivates us in this Project and Provide Guidence of Various Topics.",
  },
];
const Images = [img1, img2];

const AboutSection = () => {
  return (
    <section className="w-9/12 mx-auto my-64 py-10 rounded-4xl bg-gray-900 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Milestones</h2>
        <p className="text-gray-300 mt-3">
          Discover our journey, values, and mission.
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Central Line */}
        <div className="absolute w-1 h-full bg-purple-500 top-0 left-1/2 transform -translate-x-1/2"></div>

        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full max-w-4xl my-6 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* <div className="relative flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80"> */}
            <div className="grid grid-flow-col grid-rows-2 bg-gray-800 p-6 rounded-lg shadow-lg w-104">
              <div className="">
                <div className="text-purple-300">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
              <div>
                <Carousel images={Images} />
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
