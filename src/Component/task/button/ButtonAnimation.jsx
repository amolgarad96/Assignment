"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ButtonAnimation() {
  const [index, setIndex] = useState(0);
  const [reset, setReset] = useState(false);

  const steps = ["Design", "Develop", "Test"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 2) {
        // When at right → make full white then reset
        setReset(true);

        setTimeout(() => {
          setIndex(0);
          setReset(false);
        }, 600);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  const carPosition = ["5%", "45%", "85%"][index];

  const textAlignment =
    index === 0
      ? "justify-start pl-6"
      : index === 1
      ? "justify-center"
      : "justify-end pr-6";

  return (
    <div className="mt-16 w-full px-4">
  <div className="flex justify-center">
    <div className="relative w-full max-w-[520px] h-[70px] sm:h-[80px] md:h-[85px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg">

        {/* Background */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            background: reset
              ? "#FFFFFF"
              : `linear-gradient(to right, #272727 ${
                  index === 0 ? "30%" : index === 1 ? "30%" : "30%"
                }, #FFFFFF 100%)`,
          }}
        />

        {/* Text */}
        <div
          className={`absolute inset-0 flex items-center ${textAlignment} text-xl font-semibold transition-all duration-500 ${
            reset ? "text-black" : "text-white"
          }`}
        >
          {steps[index]}
        </div>

        {/* Car */}
        <div
          className="absolute bottom-0 transition-all duration-700 ease-in-out"
          style={{ left: carPosition }}
        >
          <Image
            src="/images/task/car.png"
            alt="car"
            width={45}
            height={25}
          />
        </div>
      </div>
      </div>
    </div>
  );
}