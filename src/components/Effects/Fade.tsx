import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import * as React from "react";

type TextFadeProps = {
  direction?: "up" | "down" | "left" | "right";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
  once?: boolean;
};

export default function Fade({
  direction = "up",
  children,
  className = "",
  staggerChildren = 0.1,
  delay = 0,
  once = true,
}: TextFadeProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once });

  const distance = 24;

  const offset =
    direction === "up"
      ? distance
      : direction === "down"
      ? -distance
      : direction === "left"
      ? distance
      : -distance;

  const fadeVariant: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" || direction === "right" ? offset : 0,
      y: direction === "up" || direction === "down" ? offset : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", duration: 0.8, delay },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={fadeVariant}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
