import React from "react";
import { FaBrain, FaShieldAlt, FaMobileAlt, FaHeartbeat } from "react-icons/fa";
import { FaMapLocationDot, FaEye } from "react-icons/fa6";

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
    icon: <FaHeartbeat size={40} />,
    title: "CareGiver Support",
    description:
      "Track vital health parameters efficiently with smart sensors.",
  },
  {
    icon: <FaShieldAlt size={40} />,
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
    <section className="w-8/12 mx-auto my-32 py-20 rounded-xl  bg-gradient-to-b from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <p className="text-gray-300 mt-3">
          Discover the core capabilities of Smruti-Pankha
        </p>
      </div>

      <div className="px-32">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-fit">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-purple-700 bg-opacity-90 m-2 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform w-4/12 sm:w-9/12 md:w-8/12 lg:w-12/12"
            >
              <div className="mb-4 text-indigo-300">{feature.icon}</div>
              <h3 className="text-2xl text-center font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
