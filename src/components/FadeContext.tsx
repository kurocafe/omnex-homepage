"use client";
import { createContext, useContext, useState } from "react";

type FadeContextType = {
  fading: boolean;
  fadeOut: (cb: () => void) => void;
};

const FadeContext = createContext<FadeContextType | undefined>(undefined);

export function FadeProvider({ children }: { children: React.ReactNode }) {
  const [fading, setFading] = useState(false);

  // フェードアウト開始→コールバックで遷移
  const fadeOut = (cb: () => void) => {
    setFading(true);
    setTimeout(() => {
      cb();
      setFading(false); // すぐ戻すと新ページでfadeInできないので、PageTransitionで制御
    }, 500); // フェードアウト時間
  };

  return (
    <FadeContext.Provider value={{ fading, fadeOut }}>
      {children}
    </FadeContext.Provider>
  );
}

export function useFade() {
  const ctx = useContext(FadeContext);
  if (!ctx) throw new Error("useFade must be used within FadeProvider");
  return ctx;
}
