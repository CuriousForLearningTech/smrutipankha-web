import React, { Suspense, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./loadmodel";

const HeroSection = () => {
  const ref = useRef();
  return (
    <section className="mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen pt-10 top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-slate-800 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-10 left-10 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M40.2,-69.6C51.5,-60.6,60.4,-50.4,65.7,-38.6C71.1,-26.8,72.9,-13.4,73.1,0.1C73.3,13.7,72,27.3,64.5,36.8C57,46.2,43.2,51.6,30,57.8C16.8,63.9,4.2,70.7,-9.4,72.2C-23,73.7,-46,69.9,-56.8,57.2C-67.6,44.4,-66.3,22.2,-68.8,-1.3C-71.3,-24.7,-77.5,-49.4,-67.5,-60.6C-57.4,-71.7,-31.2,-69.2,-8.4,-62.5C14.4,-55.7,28.9,-44.8,40.2,-69.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute top-30 left-80 w-16 h-16 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M40.2,-69.6C51.5,-60.6,60.4,-50.4,65.7,-38.6C71.1,-26.8,72.9,-13.4,73.1,0.1C73.3,13.7,72,27.3,64.5,36.8C57,46.2,43.2,51.6,30,57.8C16.8,63.9,4.2,70.7,-9.4,72.2C-23,73.7,-46,69.9,-56.8,57.2C-67.6,44.4,-66.3,22.2,-68.8,-1.3C-71.3,-24.7,-77.5,-49.4,-67.5,-60.6C-57.4,-71.7,-31.2,-69.2,-8.4,-62.5C14.4,-55.7,28.9,-44.8,40.2,-69.6Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute top-60 left-70 w-24 h-24 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M40.2,-69.6C51.5,-60.6,60.4,-50.4,65.7,-38.6C71.1,-26.8,72.9,-13.4,73.1,0.1C73.3,13.7,72,27.3,64.5,36.8C57,46.2,43.2,51.6,30,57.8C16.8,63.9,4.2,70.7,-9.4,72.2C-23,73.7,-46,69.9,-56.8,57.2C-67.6,44.4,-66.3,22.2,-68.8,-1.3C-71.3,-24.7,-77.5,-49.4,-67.5,-60.6C-57.4,-71.7,-31.2,-69.2,-8.4,-62.5C14.4,-55.7,28.9,-44.8,40.2,-69.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="mx-auto w-10/12 max-h-9/10  py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="w-4/10 mx-2 md:w-1/2 text-left"> */}

          {/* Left: Typing Animation & Description */}
          <div className="text-center md:text-left md:w-1/2 relative z-10 px-8">
            <h1 className="text-6xl font-bold mb-4 min-h-32">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to Smruti-Pankha",
                    "Your AI-Powered Solution",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-xl text-slate-700 mb-6">
              Our innovative product integrates AI and IoT to provide seamless
              solutions for Alzheimer's patients, ensuring better care and
              safety.Our innovative product integrates AI and IoT to provide
              seamless solutions for Alzheimer's patients, ensuring better care
              and safety.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-purple-500 px-4.5 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-purple-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
              >
                Get started
                <span></span>
              </a>
            </div>
          </div>

          {/* Right: 3D Model Placeholder */}
          <div className="w-full max-h-lvh md:w-1/2  rounded-lg flex items-center justify-center mt-10 md:mt-0 relative z-10">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  penumbra={1}
                  angle={0.1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Stage
                  controls={ref}
                  preset="portrait"
                  intensity={1}
                  environment="dawn"
                >
                  false
                  <Model />
                  false
                </Stage>
              </Suspense>
              <OrbitControls ref={ref} autoRotate />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
