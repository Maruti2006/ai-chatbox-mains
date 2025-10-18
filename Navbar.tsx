import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-sm bg-gray-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-indigo-400 cursor-pointer">LegalHelp AI</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#guidance" className="hover:text-indigo-300">Guidance</a>
          <a href="#rights" className="hover:text-indigo-300">Rights</a>
          <a href="#chatbot" className="hover:text-indigo-300">Chatbot</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Rights..."
            className="p-2 rounded bg-gray-700 border-none text-white focus:outline-indigo-400"
          />
        </div>
        <button
          className="md:hidden text-indigo-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 py-2 bg-gray-800 space-y-2">
          <a href="#guidance" className="block hover:text-indigo-300">Guidance</a>
          <a href="#rights" className="block hover:text-indigo-300">Rights</a>
          <a href="#chatbot" className="block hover:text-indigo-300">Chatbot</a>
          <a href="#contact" className="block hover:text-indigo-300">Contact</a>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Rights..."
            className="w-full p-2 rounded bg-gray-700 border-none text-white focus:outline-indigo-400"
          />
        </div>
      )}
    </nav>
  );
}
