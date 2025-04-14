//Profile.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function Profile() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme ? "bg-amber-50" : "bg-gray-900"
      } w-300 h-50 border-1 flex flex-col justify-center items-center`}
    >
    <h1 className={`m-10 ${theme ? 'text-black':'text-white'}`}>Profile Component</h1>
      <button
        onClick={() => setTheme(!theme)}
        className="border px-2 rounded-lg bg-amber-500 m-10"
      >
        Change
      </button>
    </div>
  );
}
