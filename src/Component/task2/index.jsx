"use client";

export default function Task2() {
    return (
        <div className="relative min-h-screen bg-[#0B1B3F] text-white overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1f2a56_1px,transparent_0)] bg-[size:22px_22px] opacity-40" />

            <div className="relative z-10 px-6 md:px-12 lg:px-16 py-16">

                {/* Heading */}
                <p className="text-2xl md:text-3xl lg:text-4xl leading-tight max-w-4xl">
                    Connect to existing systems. Orchestrate payments across
                    multiple processors, build custom workflows, and connect to third
                    parties using APIs, partner apps or pre-built integrations.
                </p>

                {/* Flow Section */}
                <div className="relative mt-16 lg:mt-24 flex justify-center items-center min-h-[700px]">

                    {/* ================= TOP SYSTEMS ================= */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#16245A] p-3 md:p-4 rounded-2xl flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-3xl">

                        {["ERP", "CRM", "Subscriptions", "Legacy billing", "Booking system"].map((item) => (
                            <div
                                key={item}
                                className="bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-[14px]"
                            >
                                {item}
                            </div>
                        ))}

                    </div>
                    {/* ================= SDK ================= */}
                    <div className="absolute top-[160px] md:top-[160px] left-[40%] -translate-x-1/2 bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-[14px]">
                        SDK
                    </div>
                    {/* SDK → Stripe Curved Connector */}
                    <svg
                        className="absolute left-[40%] -translate-x-1/2 top-[80px]"
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
                        className="absolute left-[40%] -translate-x-1/2  top-[180px]"
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
                    <div className="absolute top-[140px] sm:top-[140px] right-[38%] translate-x-1/2 bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-[14px]">
                        Event Destinations
                    </div>
                    <svg
                        className="absolute right-[37%] -translate-x-1/2 top-[80px]"
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
                        className="absolute right-[42%] translate-x-1/2 top-[200px] -rotate-[90deg]"
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
                    {/* ================= CENTER STRIPE ================= */}
                    <div className="absolute top-[300px] md:top-[280px] left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-lg md:text-[14px] font-semibold shadow-2xl">
                        stripe
                    </div>
         <svg
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[70%] lg:w-[60%]"
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
                    {/* ================= LEFT ICON GRID ================= */}
                    <div className="absolute top-[310px] md:top-[280px] left-[5%] bg-[#16245A] p-3 md:p-5 rounded-2xl grid grid-cols-3 gap-3 md:gap-4">

                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group w-12 h-12 md:w-10 md:h-10 lg:w-16 lg:h-16 perspective">
                                <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-x-180">
                                    <div className="absolute inset-0 bg-slate-800 rounded-lg flex items-center justify-center backface-hidden text-xs md:text-[12px]">
                                        A
                                    </div>
                                    <div className="absolute inset-0 bg-purple-500 rounded-lg flex items-center justify-center rotate-x-180 backface-hidden text-xs md:text-[12px]">
                                        B
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* ================= DATA PIPELINE ================= */}
                    <div className="absolute top-[360px] md:top-[320px] right-[15%] bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-[14px]">
                        Data Pipeline
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
                    {/* ================= ORCHESTRATION ================= */}
                    <div className="absolute top-[470px] md:top-[520px] left-1/2 -translate-x-1/2 bg-purple-600 px-6 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-[14px]">
                        Orchestration
                    </div>

                    {/* ================= PSP ROW ================= */}
                    <div className="absolute top-[560px] md:top-[620px] left-1/2 -translate-x-1/2 flex gap-3 md:gap-6">

                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="w-14 h-14 md:w-16 md:h-16 bg-purple-700 rounded-xl flex items-center justify-center text-sm md-[12px]">
                                PSP
                            </div>
                        ))}

                    </div>

                    {/* ================= APP MARKETPLACE ================= */}
                    <div className="hidden absolute lg:flex top-[330px] md:top-[320px] left-[28%] -translate-x-1/2 bg-purple-600 px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center gap-2 text-sm md:text-base">
                        <span>App Marketplace</span>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.25 3a.75.75 0 0 0-.75.75v6c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5c0 1.24-1 2.25-2.25 2.25h-6C1.01 12 0 11 0 9.75v-6C0 2.51 1 1.5 2.25 1.5h1.5a.75.75 0 1 1 0 1.5h-1.5Z"
                                fill="#F2F7FE" />
                        </svg>
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