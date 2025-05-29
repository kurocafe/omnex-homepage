'use client';

import BackButtonWrapper from '@/components/BackButtonWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const timelineData = [
  { year: 1985, text: "1985" },
  { year: 1991, text: "1991" },
  { year: 1995, text: "1995" },
  { year: 2002, text: "2002" },
  { year: 2003, text: "2003" },
  { year: 2006, text: "2006" },
  { year: 2007, text: "2007" },
  { year: 2015, text: "2015" },
  { year: 2025, text: "2025" },
]

export default function AboutPage() {
  const [selectedYear, setSelectedYear] = useState<Number | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (year: number) => {
    if (selectedYear === year) return;

    setSelectedYear(year);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setSelectedYear(null);
      }
    };

    if (selectedYear !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedYear]);

  return (
    <div className="relative bg-cover bg-center min-h-screen text-white px-6 py-16"
      style={{ backgroundImage: 'url(/IMG_0645.webp)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow">Who are we</h1>
        <p className="text-lg font-semibold drop-shadow mb-2">
          OMNEX CO., LTD. is a dynamic business consultancy dedicated to empowering companies to thrive.
        </p>
        <p className="text-lg drop-shadow mb-2">
          We specialize in business development, product innovation, and creating strategic partnerships.
        </p>
        <p className="text-lg drop-shadow mb-2">
          Our team works closely with clients to develop tailored strategies that drive growth and efficiency, ensuring practical and innovative solutions.
        </p>
        <p className="text-lg drop-shadow mb-10">
          At OMNEX, we're committed to building lasting relationships and helping businesses navigate the complexities of the modern market.
        </p>

        {/* Timeline */}
        <div className="relative w-full h-60 flex items-center justify-center px-8">
          <div className="absolute w-[110%] h-2 bg-gray-300/80 top-1/2" />
          {timelineData.map((item, idx) => {
            const positionPercent = (idx / (timelineData.length - 1)) * 100;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.year}
                className="absolute flex flex-col items-center"
                style={{ left: `${positionPercent}%`, transform: 'translateX(-50%)' }}
              >
                {isEven ? (
                  <>
                    <div
                      className='mb-2 text-lg underline-offset-2 hover:underline cursor-pointer transition duration-300'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(item.year)
                      }}
                    >
                      {item.year}
                    </div>
                    <div className='w-1 h-16 mb-25 bg-gray-300/80' />
                  </>
                ) : (
                  <>
                    <div className='w-1 h-16 mt-29 bg-gray-300/80' />
                    <div
                      className='mt-2 text-lg underline-offset-2 cursor-pointer transition-all duration-300 hover:underline'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(item.year)
                      }}
                    >
                      {item.year}
                    </div>
                  </>
                )}

                <AnimatePresence>
                  {selectedYear === item.year && (
                    <motion.div
                      ref={popupRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-32 bg-white text-black px-4 py-2 rounded-lg shadow-md z-50 w-60 text-center text-sm"
                    >
                      {item.text}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <BackButtonWrapper />
    </div >
  );
}
