"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("access"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">EasyLikhit</h1>
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/mocktest">Mock Test</Link>
          <Link href="/questionbank">Question Bank</Link>
          <Link href="/traffic-signs">Traffic Signs</Link>
          <Link href="/vision-test">Vision Test</Link>

          {/* Resources dropdown */}
          <div className="relative group">
            <button className="cursor-pointer">Resources ▾</button>

            <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-md w-44 z-50">
              <Link
                href="/resources/about-us"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                About Us
              </Link>

              <Link
                href="/resources/traffic-rules"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Traffic Rules
              </Link>

              <Link
                href="/resources/blog"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Blog
              </Link>
            </div>
          </div>

          <Link href="/contact">Contact</Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Profile avatar dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-white"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black border rounded shadow-lg z-50">
                  {!isLoggedIn ? (
                    <>
                      <Link
                        href="/login"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Login
                      </Link>

                      <Link
                        href="/signup"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Signup
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
