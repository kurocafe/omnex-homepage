'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import { useFade } from "./FadeContext";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { fading } = useFade();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={fading ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}