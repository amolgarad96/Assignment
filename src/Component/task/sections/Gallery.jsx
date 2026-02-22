"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/task/first.png",
  "/images/task/second.png",
  "/images/task/third.png",
  "/images/task/fourth.png",
  "/images/task/five.png",
  "/images/task/five.png",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-3 md:px-10 pb-20">

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-4 h-[700px]">

        {images.map((src, index) => {
          let flexValue = "flex-[1]";

          if (index === activeIndex) {
            flexValue = "flex-[6]";
          } else if (
            index === activeIndex + 1
          ) {
            flexValue = "flex-[3]";
          } else if (activeIndex === images.length - 1) {
            if (index === activeIndex - 1) {
              flexValue = "flex-[3]";
            }
          }

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer 
              transition-[flex] duration-500 ease-in-out ${flexValue}`}
            >
              <Image
                src={src}
                alt={`gallery-${index}`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}

      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">

        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative min-w-[80%] aspect-[6/6] rounded-3xl overflow-hidden snap-center transition-transform duration-300 ${activeIndex === index ? "scale-100" : "scale-95"
              }`}
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>
    </section>
  );
}