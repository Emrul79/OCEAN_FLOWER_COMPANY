import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mainlogo from "../assets/mainlogo.png";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "OurProcess", path: "/ourProcess" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={Mainlogo}
              alt="Ocean Flower Company"
              className="h-20 w-auto"
            />
            <span className="font-semibold text-lg   text-gray-800 dark:text-white"></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* WhatsApp CTA */}
            <Link
              to="https://wa.me/message/J5WYTIYSI55ZL1"
              target="_blank"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              WhatsApp
            </Link>

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? (
                <Sun color="#3e9392" size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {open ? <X color="#3e9392" /> : <Menu color="#3e9392" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className=" px-4 py-4 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className=" text-gray-700 dark:text-gray-300 text-sm font-medium text-center"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="w-full">
              <a
                href="https://wa.me/message/J5WYTIYSI55ZL1"
                target="_blank"
                className="w-full flex justify-center items-center py-2 my-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex justify-center gap-2 items-center p-2 rounded-lg border border-gray-300 dark:border-gray-600"
            >
              {darkMode ? (
                <Sun size={16} color="#3e9392" />
              ) : (
                <Moon size={16} />
              )}
              {darkMode ? (
                <span className="text-sm text-white">Light Mode</span>
              ) : (
                <span className="text-sm text-black">Dark Mode</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
