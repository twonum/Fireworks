"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const StarryBackground = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Prevent blocking interactions
        backgroundColor: "transparent", // Add for debugging (change to 'blue' to verify visibility)
      }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      {/* Stars: Ensure they are visible */}
      <Stars
        radius={100}
        depth={50}
        count={5000} // Reduced count for debugging performance
        factor={4}
        saturation={0}
        fade={true}
        speed={1}
      />

      {/* Optional: OrbitControls for interactive testing */}
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
};

export default StarryBackground;
