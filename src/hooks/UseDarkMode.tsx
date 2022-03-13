import { useState, useEffect } from "react";

export type DarkModeState = "dark" | "light";
export type SetDarkModeState = React.Dispatch<
  React.SetStateAction<DarkModeState>
>;

function useDarkMode() {
  const isClient = typeof window !== "undefined";
  const currentTheme = isClient ? localStorage.theme : "dark";

  const [theme, setTheme] = useState<DarkModeState>(currentTheme);

  const getNewTheme = (oldTheme: DarkModeState) => {
    return oldTheme === "dark" ? "light" : "dark";
  };

  const toggleTheme = () => {
    const newTheme = getNewTheme(theme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.body;

    root.classList.remove(theme);
    root.classList.add(getNewTheme(theme));
  }, [theme]);

  return [theme, toggleTheme] as const;
}

export default useDarkMode;
