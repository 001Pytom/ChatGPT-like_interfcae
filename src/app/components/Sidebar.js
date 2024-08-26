"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars, FaRobot } from "react-icons/fa";
import { RiRobot3Line } from "react-icons/ri";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`hidden lg:block h-screen p-5 bg-white dark:bg-[#171717] dark:text-white border dark:border-none transition-all duration-300 ${
        isOpen ? "w-1/5" : "w-[5%]"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="focus:outline-none mb-4 text-xl text-gray-700 dark:text-gray-300"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div>
          <div className="flex items-center gap-3 py-5">
            <FaRobot className="text-3xl" />
            <Link href="#">ChatGPT</Link>
          </div>
          <div className="flex items-center gap-3 py-5">
            <RiRobot3Line className="text-3xl" />
            <Link href="#">Code Pilot</Link>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
