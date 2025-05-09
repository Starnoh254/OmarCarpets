import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h3 className="font-bold text-xl font-heading">CarpetBiz</h3>

        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} CarpetBiz. All rights reserved.
      </div>
    </footer>
  );
}
