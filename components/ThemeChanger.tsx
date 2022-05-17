import { cp } from "fs/promises";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Theme } from "types/theme";

const ThemeChanger: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imgProps = {
    width: 16,
    height: 16,
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-4 h-6 rounded m-0 focus:outline-none"
      onClick={() => setTheme(theme === Theme.Dark ? "light" : Theme.Dark)}
    >
      {mounted && theme === Theme.Dark ? (
        <Image alt="sun" src="/sun.svg" {...imgProps} />
      ) : (
        <Image alt="moon" src="/moon.svg" {...imgProps} />
      )}
    </button>
  );
};

export default ThemeChanger;
