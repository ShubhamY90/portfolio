// src/components/Start.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/amita/700.css";

export default function Start() {
  const navigate = useNavigate();
  const greetings = ["Hello 👋", "Namaste 🙏", "नमस्ते 🙏"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 < greetings.length ? prev + 1 : prev));
    }, 1600); // switch between greetings

    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000); // navigate after last greeting

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl font-[Amita] text-blue-300 drop-shadow-[0_0_18px_rgba(59,130,246,0.8)]"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}
