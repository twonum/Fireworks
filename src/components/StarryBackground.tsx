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
        pointerEvents: "none",
        backgroundColor: "transparent",
      }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      {/* Enhanced Stars */}
      <Stars
        radius={200} // Broader starfield radius
        depth={80} // Increased depth for layering effect
        count={10000} // Higher star density for immersive look
        factor={7} // Bigger and more dramatic stars
        saturation={0.8} // Vibrant star colors for visual appeal
        fade={true} // Fade effect for realistic depth
        speed={0.8} // Smooth shimmer speed
      />

      {/* Smooth Auto-Rotate */}
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.1} // Ultra-smooth and slow rotation
      />
    </Canvas>
  );
};

export default StarryBackground;
