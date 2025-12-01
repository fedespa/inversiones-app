"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (resolvedTheme === "dark") {
    return <Sun onClick={() => setTheme("light")} className="text-yellow-500 cursor-pointer"/>
  }

  if (resolvedTheme === "light") {
    return <Moon onClick={() => setTheme("dark")} className="text-black cursor-pointer hover:text-blue-800 duration-200"/>
  }
}
