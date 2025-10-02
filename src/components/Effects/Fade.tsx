import * as React from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

type FadeProps = {
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
  staggerChildren = 0.08,
  delay = 0,
  once = true,
}: FadeProps) {
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

  const childVariant: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" || direction === "right" ? offset : 0,
      y: direction === "up" || direction === "down" ? offset : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const containerVariant: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          // each child uses the childVariant and inherits parent's initial/animate
          <motion.div variants={childVariant}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}