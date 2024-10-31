import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const switchMode = () => {
    if (buttonEnabled) {
      setDarkMode(!darkMode);
    }
  };

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem("Theme");
    if (localStorageDarkMode && localStorageDarkMode === "Dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", "Dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", "Light");
    }
    setButtonEnabled(false);
    setTimeout(() => {
      setButtonEnabled(true);
    }, 700);
  }, [darkMode]);

  return (
    <div
      className={`bg-[#fff] dark:bg-gray-800 shadow-switch-light dark:shadow-switch-dark w-14 h-8 items-center gap-1 px-1 rounded-full cursor-pointer flex transition-all duration-700`}
      onClick={switchMode}
    >
      {darkMode ? (
        <span className="h-6 w-6 rounded-full p-1/2 bg-gradient-to-b from-[#666] to-[#333] shadow-button-dark translate-x-0 transition-all duration-700"></span>
      ) : (
        <span className="h-6 w-6 rounded-full p-1/2 bg-gradient-to-b from-[#ddd] to-[#eee] shadow-button-light translate-x-6 transition-all duration-700"></span>
      )}
    </div>
  );
};
