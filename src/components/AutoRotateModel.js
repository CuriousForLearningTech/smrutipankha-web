import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const AutoRotateModel = () => {
  const modelRef = useRef();

  // Rotate the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed
    }
  });

  // Load the GLTF model
  const { scene } = useGLTF("/path/to/your-model.glb"); // Replace with your model path

  return <primitive object={scene} ref={modelRef} scale={1.5} />;
};

export default AutoRotateModel;
