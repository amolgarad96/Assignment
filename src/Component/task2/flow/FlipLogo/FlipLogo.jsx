"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  "/images/task2/one.png",
  "/images/task2/two.png",
  "/images/task2/three.png",
  "/images/task2/four.png",
  "/images/task2/five.png",
  "/images/task2/six.png",
  "/images/task2/seven.png",
  "/images/task2/eight.png",
  "/images/task2/nine.png",
  "/images/task2/ten.png",
  "/images/task2/eleven.png",
  "/images/task2/twelve.png",
];

export default function FlipLogo() {
  const totalCards = logos.length / 2;
  const [flippedIndex, setFlippedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndex((prev) => (prev + 1) % totalCards);
    }, 1500); // ⏱ change flip speed here

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <div className="absolute top-[310px] md:top-[280px] left-[5%] bg-[#16245A] p-3 md:p-5 rounded-2xl grid grid-cols-3 gap-3 md:gap-4">
      {Array.from({ length: totalCards }).map((_, index) => {
        const frontImage = logos[index * 2];
        const backImage = logos[index * 2 + 1];

        const isFlipped = flippedIndex === index;

        return (
          <div key={index} className="w-16 h-16 perspective">
            <div
              className={`relative w-full h-full transition-transform duration-700 transform preserve-3d ${
                isFlipped ? "rotate-x-180" : ""
              }`}
            >
              <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center backface-hidden">
                <Image
                  src={frontImage}
                  alt={`logo front ${index}`}
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <div className="absolute inset-0 rounded-lg flex items-center justify-center rotate-x-180 backface-hidden">
                <Image
                  src={backImage}
                  alt={`logo back ${index}`}
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}