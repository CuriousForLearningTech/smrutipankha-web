import React from "react";

import meta from "../Data/meta";
const features = meta.Features || [];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="w-11/12 md:w-8/12 mx-auto my-48 py-20 rounded-xl  bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400 text-white relative overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <p className="text-gray-300 mt-3">
          Discover the core capabilities of Smruti-Pankha
        </p>
      </div>

      <div className="md:p-10 sm:p-12">
        <div className="mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between bg-gradient-to-br from-purple-700 to-indigo-800 text-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform md:w-64 md:h-60 relative group"
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
