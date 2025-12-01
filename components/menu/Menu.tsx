"use client";

import Link from "next/link";
import ThemeSwitch from "../ui/ThemeSwitch";
import { usePathname } from "next/navigation";
import { LINKS } from "@/content/const";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="max-md:hidden sticky top-0 z-50 bg-white dark:bg-[#101828] border-b border-gray-700 shadow-lg">
        <div className="flex justify-center">
          <div className="max-w-7xl flex items-center p-4 w-full">
            <Link
              href={"/"}
              className="text-2xl font-extrabold text-blue-800 dark:text-teal-400 tracking-wider hover:text-teal-300 transition-colors duration-200 mr-10"
            >
              FINANZAS.COM
            </Link>

            <div className="flex gap-8">
              {LINKS.map((li, index) => (
                <Link
                  key={index}
                  href={li.path}
                  className={`${
                    currentPath === li.path && "underline font-semibold"
                  } text-black hover:text-blue-800 dark:text-gray-300 dark:hover:text-teal-400`}
                >
                  {li.title}
                </Link>
              ))}
            </div>

            <div className="ml-auto">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>
      <button className="flex justify-end items-center w-full p-5 md:hidden">
        <MenuIcon onClick={() => setIsOpen(true)} />
      </button>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed top-0 w-full h-full right-0 bg-black/90 z-50 transition duration-300`}
      >
        <button className="w-full p-4 flex justify-end cursor-default">
          <X
            size={36}
            className="border p-1 rounded-full cursor-pointer hover:text-black hover:bg-white hover duration-200"
            onClick={closeMenu}
          />
        </button>
        <div className="text-white h-full flex flex-col items-center justify-center">
          {LINKS.map((li, index) => (
            <Link
              href={li.path}
              key={index}
              onClick={closeMenu}
              className="px-2 py-6 border-b border-b-white w-full text-center hover:bg-white hover:text-black duration-200 font-semibold text-lg"
            >
              {li.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
