"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function Rings() {
  const rings = useRef<Group>(null);
  useFrame((_, time) => {
    if (rings.current) rings.current.rotation.y += Math.min(time, 0.05) * 0.14;
  });

  return (
    <group ref={rings} rotation={[0.24, -0.32, -0.22]}>
      <mesh>
        <torusGeometry args={[1.2, 0.008, 8, 84]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.52} />
      </mesh>
      <mesh rotation={[0.96, 0.36, 0]}>
        <torusGeometry args={[1.38, 0.007, 8, 84]} />
        <meshBasicMaterial color="#d6ebff" transparent opacity={0.42} />
      </mesh>
      <mesh position={[1.04, 0.6, 0]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export default function BrandHeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 43 }} dpr={[1, 1.4]} gl={{ powerPreference: "low-power" }} fallback={null}>
      <Rings />
    </Canvas>
  );
}
