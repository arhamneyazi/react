import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch && inputValue.trim() !== "") {
        onSearch(inputValue)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center group">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none transition-colors duration-300 group-focus-within:text-indigo-500 text-gray-400 dark:text-gray-500">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="block w-full py-4 pl-14 pr-32 text-base text-gray-900 bg-white border border-gray-200 rounded-full shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-indigo-400 dark:focus:border-transparent transition-all duration-300 hover:shadow-md"
          placeholder="Search for Silicon Valley, The Office, or One-Punch Man..."
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="absolute right-2.5 bottom-2 top-2 px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-800 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
