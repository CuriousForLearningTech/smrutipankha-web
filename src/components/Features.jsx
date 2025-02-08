import React from "react";
import { FaBrain, FaShieldAlt, FaMobileAlt, FaHeartbeat } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain size={40} />,
    title: "AI-Powered Insights",
    description:
      "Leverage AI-driven analytics to monitor and improve patient care.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Enhanced Security",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Enhanced Security",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Enhanced Security",
    description: "Secure and encrypted data processing ensures user privacy.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Seamless Connectivity",
    description: "Stay connected via mobile app for real-time updates.",
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Health Monitoring",
    description:
      "Track vital health parameters efficiently with smart sensors.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-10/12 mx-auto my-6 py-4 rounded-xl  bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <p className="text-gray-300 mt-3">
          Discover the core capabilities of Smruti-Pankha
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-fit border-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" border-2 flex flex-col col-span-2  items-center bg-purple-800 bg-opacity-90 m-4 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform w-4/12 sm:w-9/12 md:w-8/12 lg:w-7/12"
          >
            <div className="mb-4 text-indigo-300">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
