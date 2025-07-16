import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 text-white">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-cyan-400">
          St Michael Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-cyan-400 transition-colors ${
                  location.pathname === path ? "text-cyan-400" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Links */}
      {open && (
        <ul className="md:hidden bg-black/90 px-6 pb-4 space-y-4">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className={`block w-full py-2 text-sm hover:text-cyan-400 transition-colors ${
                  location.pathname === path ? "text-cyan-400" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
