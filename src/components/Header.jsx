import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
