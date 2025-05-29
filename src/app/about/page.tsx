'use client';

import BackButtonWrapper from '@/components/BackButtonWrapper';
import React from 'react';

const timelineData = [
  { year: 1985 },
  { year: 1991 },
  { year: 1995 },
  { year: 2002 },
  { year: 2003 },
  { year: 2006 },
  { year: 2007 },
  { year: 2015 },
  { year: 2025 },
]

export default function AboutPage() {
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
          <div className="absolute w-[110%] h-1 bg-white/70 top-1/2" />
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
                    <div className='mb-2 text-sm'>
                      {item.year}
                    </div>
                    <div className='w-0.5 h-12 mb-20 bg-white' />
                  </>
                ) : (
                  <>
                    <div className='w-0.5 h-12 mt-20 bg-white' />
                    <div className='mt-2 text-sm'>
                      {item.year}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <BackButtonWrapper />
    </div >
  );
}
