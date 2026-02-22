"use client";

import Image from "next/image";
import ButtonAnimation from "../button/ButtonAnimation";

export default function Hero({isDark,toggleTheme}) {
  return (
    <section className="w-full text-black text-center py-28">
        {/* switch button */}
     <div className="mb-10 flex justify-center">
  <div
    onClick={toggleTheme}
    className="relative w-[100px] h-[40px] cursor-pointer"
  >
    {/* Light Image */}
    <Image
      src="/images/task/light.png"
      alt="light"
      fill
      className={`absolute transition-all duration-500 ease-in-out ${
        isDark ? "opacity-0 scale-90" : "opacity-100 scale-100"
      }`}
    />

    {/* Dark Image */}
    <Image
      src="/images/task/dark.png"
      alt="dark"
      fill
      className={`absolute transition-all duration-500 ease-in-out ${
        isDark ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    />
  </div>
</div>


      <h1 className={`font-bodoni text-6xl md:text-[81px] font-bold ${isDark ? 'text-white' : 'text-black '} tracking-[-0.03em] leading-[1.2]`}>
        VISUALS THAT CONVERT
        <br />
        VISITORS INTO CUSTOMERS
      </h1>

      <div className="mt-16 flex justify-center">
        {/* <button className="px-12 py-5 rounded-xl bg-gradient-to-r from-gray-900 to-gray-400 text-white font-semibold shadow-lg">
          Design
        </button> */}
        <ButtonAnimation />
      </div>
    </section>
  );
}