"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            Made with ❤️ for CS students
          </p>
          <p className="text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
            © {year}{" "}
            <Link
              href="https://ndunna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Nikhil Dunna
              </span>
            </Link>
            . All rights reserved. No LLM was harmed in the making of this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
