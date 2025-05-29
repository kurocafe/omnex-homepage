"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFade } from "./FadeContext";

type FadeLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function FadeLink({ href, children, className = "", }: FadeLinkProps) {
  const router = useRouter();
  const { fadeOut } = useFade();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    fadeOut(() => {
      router.push(href);
    });
  };

  return (
    <a
      href={href}
      className={`${className}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
