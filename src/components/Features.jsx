import React from "react";
import { FaBrain, FaShieldAlt, FaMobileAlt, FaHeartbeat } from "react-icons/fa";
import { FaMapLocationDot, FaEye } from "react-icons/fa6";
import { BiAccessibility, BiChip } from "react-icons/bi";

const features = [
  {
    icon: <FaBrain size={40} />,
    title: "AI-Powered Assistance",
    description: "Continuous tracking of patient activities and health data.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Medication Reminders",
    description:
      "Stay connected via mobile app for real-time updates.Ensuring the",
  },
  {
    icon: <FaMapLocationDot size={40} />,
    title: "GeoFencing",
    description:
      "Track vital health parameters efficiently with smart sensors.",
  },
  {
    icon: <FaEye size={40} />,
    title: "Computer Vision",
    description:
      "Track vital health parameters efficiently with smart sensors.",
  },
  {
    icon: <BiAccessibility size={40} />,
    title: "CareGiver Support",
    description:
      "Track vital health parameters efficiently with smart sensors.",
  },
  {
    icon: <BiChip size={40} />,
    title: "Natural Event Understanding",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Health Monitoring",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Enhanced Security",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-8/12 mx-auto my-48 py-20 rounded-xl  bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <p className="text-gray-300 mt-3">
          Discover the core capabilities of Smruti-Pankha
        </p>
      </div>

      <div className="px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform w-64 h-60 relative group"
            >
              {/* Icon with Glow Effect */}
              <div className="mb-1 text-indigo-300 text-5xl group-hover:text-indigo-400 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title with Elegant Styling */}
              <h3 className="text-xl font-semibold text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm opacity-90 px-2">
                {feature.description}
              </p>

              {/* Soft Glow on Hover */}
              <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
