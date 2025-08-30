"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import sun from "../../public/sun.svg";
import moon from "../../public/moon.svg";

export function ThemeButton() {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-10 justify-center items-center">
      <button
        onClick={() => setTheme("light")}
        aria-label="Toggle theme"
      >
        <Image
          className="h-12 w-auto hover:opacity-65 active:opacity-45 transition-opacity dark:invert"
          src={sun}
          alt="Switch to light theme"
          height={24}
          width={24}
        />

      </button>
<p>works on system preferences </p>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Toggle theme"
      >
        <Image
          className="h-12 w-auto hover:opacity-65 active:opacity-45 transition-opacity dark:invert"
          src={moon}
          alt="Switch to light theme"
          height={24}
          width={24}
        />

      </button>
    </div>
  );
}