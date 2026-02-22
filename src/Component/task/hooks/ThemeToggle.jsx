"use client";

import { useState } from "react";

//custom hook added to handle theme toggle
export default function useThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleTheme };
}