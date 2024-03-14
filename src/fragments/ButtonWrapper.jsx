import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    const btnElement = btnRef.current;

    btnElement.addEventListener("mousemove", handleMouseMove);
    btnElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnElement.removeEventListener("mousemove", handleMouseMove);
      btnElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full  overflow-hidden rounded-lg bg-slate-950 px-4 py-5 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Detail
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;
