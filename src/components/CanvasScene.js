import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AutoRotateModel from "./AutoRotateModel";

const CanvasScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* 3D Model */}
      <AutoRotateModel />

      {/* Controls (optional, for manual rotation) */}
      <OrbitControls />
    </Canvas>
  );
};

export default CanvasScene;
