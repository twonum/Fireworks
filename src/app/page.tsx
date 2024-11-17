"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import FireworksModule from "../components/Fireworks";

const fireworkSound = new Howl({
  src: ["/firework.mp3"],
});

export default function Home() {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    if (showFireworks) {
      FireworksModule.init("fireworks-container", {
        frequency: 200,
        launch_speed: 8,
        explode_debris_num: 150,
        explode_particles_resistance: 5,
        explode_particles_size: 10,
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 20, // Ensure it's above the starry background
      });

      setTimeout(() => {
        FireworksModule.stop();
        setShowFireworks(false);
      }, 3000);
    }
  }, [showFireworks]);

  const startFireworks = () => {
    setShowFireworks(true);
    fireworkSound.play();
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fireworks container */}
      <div
        id="fireworks-container"
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      ></div>

      {/* Main content */}
      <div className="relative z-30 flex flex-col justify-center items-center min-h-screen px-4 py-12 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to TAN TAN
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Click the button below Baby
        </motion.p>
        <motion.button
          onClick={startFireworks}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg shadow-lg hover:scale-110 transition-transform"
        >
          Launch Fireworks 🚀
        </motion.button>
      </div>
    </div>
  );
}
