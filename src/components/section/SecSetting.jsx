import { useState } from "react";

export default function SecSetting() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Optional: Add logic to apply the theme to your application
  };

  return (
    <section className="container my-12">
      <div className="flex items-center justify-center gap-6">
        <h2 className="text-xl font-bold">Theme</h2>
        <div className="flex items-center gap-2">
          <span className={`text-lg ${!isDarkMode ? "font-bold" : ""}`}>
            Light Mode
          </span>
          <button
            className={`relative h-8 w-16 rounded-full border-2 border-black transition-colors duration-300 ${isDarkMode ? "bg-white" : "bg-white"}`}
            onClick={toggleTheme}
          >
            <span
              className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-black transition-transform duration-300 ${isDarkMode ? "translate-x-9 transform bg-white" : ""}`}
            />
          </button>
          <span className={`text-lg ${isDarkMode ? "font-bold" : ""}`}>
            Dark Mode
          </span>
        </div>
      </div>
    </section>
  );
}
