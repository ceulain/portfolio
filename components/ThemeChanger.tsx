import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const ThemeChanger: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-4 h-6 rounded m-0 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && theme === "dark" ? (
        <Image width={16} height={16} alt="moon" src="/moon.svg" />
      ) : (
        <Image width={16} height={16} alt="sun" src="/sun.svg" />
      )}
    </button>
  );
};

export default ThemeChanger;
