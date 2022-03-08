

import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        className="bg-indigo-500 text-white p-3  text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
       Change Theme
    
      </button>
    </div>
  );
}

export default Button;
