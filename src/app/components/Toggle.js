"use client";
import { useState, useEffect } from "react";

export default function Toggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className=" p-2 bg-gray-200 dark:bg-[#171717] dark:text-white rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700  text-sm"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
