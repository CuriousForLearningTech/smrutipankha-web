import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaFlask, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

const aboutData = [
  {
    icon: <FaUsers size={30} />,
    title: "Experience",
    description: "Years of expertise in AI-driven solutions.",
  },
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
    description: "Pioneering advancements in AI and healthcare.",
  },
  {
    icon: <FaLightbulb size={30} />,
    title: "Curiosity",
    description: "Driven by a passion for solving complex problems.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-10/12 mx-auto py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">About Us</h2>
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
            <div className="relative flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg w-80">
              <div className="text-purple-300">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
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
