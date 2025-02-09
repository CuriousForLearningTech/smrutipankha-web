/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Untitled.geometry}
        material={
          materials["Steel"] || new MeshStandardMaterial({ color: "#00ff00" })
        }
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model2.glb");
