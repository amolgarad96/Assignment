"use client";

import FlipLogo from "./flow/FlipLogo/FlipLogo";
import TopServices from "./flow/TopSerices/TopSeriveces";
import { useEffect, useState } from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Task2() {
    const [step, setStep] = useState(0);
    const [flipIcon, setFlipIcon] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipIcon((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0B1B3F] text-white overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f2a56_1px,transparent_0)] bg-[size:22px_22px] opacity-40" />

            <div className="relative z-10 px-6 md:px-12 lg:px-16 py-16">

                <p className="text-2xl md:text-2xl lg:text-4xl leading-tight max-w-5xl">
                    Connect to existing systems. <span className="text-[#839bc8]">Orchestrate payments across
                        multiple processors, build custom workflows, and connect to third
                        parties using APIs, partner apps or pre-built integrations.</span>
                </p>

                {/* Flow Section */}
                <div className="relative mt-16 lg:mt-24 flex justify-center items-center min-h-[700px]">
                    <TopServices setStep={setStep} step={step} />
                    {/* sdk */}
                    <div className="absolute top-[160px] md:top-[160px] font-semibold left-[40%] -translate-x-1/2 bg-[#533afd] px-4 md:px-6 py-2 md:py-3 rounded text-sm md:text-[14px]">
                        SDK
                    </div>
                    {/* sdk- stripe curved connector */}
                    <svg
                        className="absolute left-[40%] -translate-x-1/2 top-[80px] -z-[11]"
                        width="2"
                        height="100"
                        viewBox="0 0 2 200"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 0V200"
                            stroke="#5D64FE"
                            strokeDasharray="4 4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    <svg
                        className="absolute left-[40%] -translate-x-1/2  top-[180px] -z-[11]"
                        width="15%"
                        height="170"
                        viewBox="0 0 260 100"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="
      M130 0
      V110
      A20 20 0 0 0 150 130
      H260
    "
                            stroke="#5D64FE"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    {/* ================= EVENT ================= */}
                    <div className="absolute top-[160px] font-semibold sm:top-[160px] right-[38%] translate-x-1/2 bg-[#533afd] px-4 md:px-6 py-2 md:py-3 rounded text-sm md:text-[14px]">
                        Event Destinations
                    </div>
                    <svg
                        className="absolute right-[37%] -translate-x-1/2 top-[80px] -z-[11]"
                        width="2"
                        height="100"
                        viewBox="0 0 2 200"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 0V200"
                            stroke="#5D64FE"
                            strokeDasharray="4 4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    <svg
                        className="absolute right-[42%] translate-x-1/2 top-[200px] -rotate-[90deg] -z-[11]"
                        width="15%"
                        height="300"
                        viewBox="0 0 260 100"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="
                                M130 0
                                V110
                                A20 20 0 0 0 150 130
                                H260
                                "
                            stroke="#5D64FE"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    {/* center stripe box */}
                    <div className="absolute top-[300px] md:top-[280px] left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-lg md:text-[28px] font-semibold shadow-2xl"
                        style={{ background: 'linear-gradient(288.31deg, #0d1738 -6.87%, #4032c8 105.95%)' }}
                    >
                        stripe
                    </div>
                    {/* horizontal line */}
                    <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[70%] lg:w-[65%] -z-[11]"
                        viewBox="0 0 100 2"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M0 1 H100"
                            stroke="#5D64FE"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    {/* left icon grid */}
                    <FlipLogo />

                    {/* data pipeline */}
                    <div className="absolute top-[360px] md:top-[320px] right-[25%] bg-[#533afd] font-semibold px-4 md:px-6 py-2 md:py-3 rounded text-sm md:text-[14px]">
                        Data Pipeline
                    </div>
                    <div className="absolute top-[360px] md:top-[320px] right-[15%] flex items-center gap-3">

                        {/* Flipping Icon */}
                        <div className="w-10 h-10 perspective">
                            <div
                                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flipIcon ? "rotate-x-180" : ""
                                    }`}
                            >
                                {/* FRONT */}
                                <div className="absolute inset-0 bg-[#2c2484] p-2 rounded-lg flex items-center justify-center backface-hidden">
                                    <Image
                                        src="/images/task2/seven.png"
                                        alt='front logo'
                                        width={40}
                                        height={25}
                                        className="object-contain"
                                    />
                                </div>

                                {/* BACK */}
                                <div className="absolute inset-0 bg-[#4032c8] p-2 rounded-lg flex items-center justify-center rotate-x-180 backface-hidden">
                                    <Image
                                        src="/images/task2/eight.png"
                                        alt='front logo'
                                        width={40}
                                        height={25}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <svg
                        className="absolute left-1/2 -translate-x-1/2 top-[420px]"
                        width="2"
                        height="100"
                        viewBox="0 0 2 100"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 0 V100"
                            stroke="#5D64FE"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>
                    {/* orchestration */}
                    <div className="absolute top-[470px] md:top-[520px] left-1/2 -translate-x-1/2 bg-[#533afd] font-semibold px-6 md:px-8 py-2 md:py-3 rounded text-sm md:text-[14px]">
                        Orchestration
                    </div>
                    <div className="absolute top-[560px] md:top-[620px] left-1/2 -translate-x-1/2 flex gap-3 md:gap-6">
                        {[1, 2, 3, 4].map((item, index) => {
                            const isVisible =
                                step === 0
                                    ? false
                                    : step === 1
                                        ? index === 1 || index === 2
                                        : true;

                            return (
                                <div
                                    key={item}
                                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-sm transition-all duration-700
          ${isVisible
                                            ? "bg-[#2c2484] text-white border border-transparent"
                                            : "bg-transparent border-2 border-dashed border-[#2c2484] text-transparent"
                                        }`}
                                >
                                    PSP
                                </div>
                            );
                        })}
                    </div>

                    {/* app marketplace */}
                    <div className="hidden absolute cursor-pointer lg:flex top-[330px] md:top-[320px] left-[28%] -translate-x-1/2 font-semibold bg-[#533afd] px-4 md:px-6 py-2 md:py-3 rounded flex items-center gap-2 text-sm md:text-base">
                        <span>App Marketplace</span>
                        <ArrowSquareOutIcon size={24} />
                    </div>

                </div>
            </div>

            {/* Flip Helpers */}
            <style jsx>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-x-180 { transform: rotateX(180deg); }
      `}</style>

        </div>
    );
}