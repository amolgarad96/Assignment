"use client";

import { useEffect, useState } from "react";

const services = [
  "ERP",
  "CRM",
  "Subscriptions",
  "Legacy billing",
  "Booking system",
];

export default function TopServices({setStep,step}) {

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2500); // ⏱ change timing here

    return () => clearInterval(interval);
  }, []);

  const isVisible = (service) => {
    if (step === 0) {
      // only crm visible
      return service === "CRM";
    }

    if (step === 1) {
      return (
        service === "ERP" ||
        service === "Subscriptions" ||
        service === "Legacy billing"
      );
    }

    if (step === 2) {
      // Show all
      return true;
    }

    return true;
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#16245A] p-3 md:p-4 rounded flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-3xl">
      {services.map((item) => (
        <div
          key={item}
          className={`transition-all duration-700 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-[14px]
            ${
              isVisible(item)
                ? "bg-[#2c2484] opacity-100 scale-100"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}