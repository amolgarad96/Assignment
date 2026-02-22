'use client'
import useThemeToggle from "./hooks/ThemeToggle";
import Navbar from "./layout/Navbar";
import TopBar from "./layout/TopBar";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";

export default function TaskPage() {
          const { isDark, toggleTheme } = useThemeToggle();
    console.log("isDark:::",isDark)
    return (
        <>
            <TopBar />
            <Navbar />
            <div className={`${isDark ? 'bg-black' : 'bg-gray-200'}`}>
                <Hero isDark={isDark} toggleTheme={toggleTheme} />
                <Gallery />
            </div>
        </>
    )
}