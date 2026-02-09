
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-dental-100 rounded-full blur-[100px] opacity-40"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[120px] opacity-30"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 20, -50, 0],
          y: [0, -40, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] bg-teal-50 rounded-full blur-[100px] opacity-20"
      />
    </div>
  );
};

export default BackgroundDecoration;
