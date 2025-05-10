import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Branches */}
        <div>
          <h3 className="font-bold text-xl font-heading mb-4">Omar Carpets</h3>
          <p className="text-sm font-inter">
            <span className="font-semibold">Branches:</span>
            <br />
            1. TRM – 1st Floor, next to Miniso
            <br />
            2. Westgate Mall – Basement Entrance
            <br />
            3. The Hub Karen – Ground Floor near Carrefour
            <br />
            4. Runda Mall – Next to Bata Shop
            <br />
            5. Greenspan Donholm – Ground Floor next to Naivas
            <br />
            6. Spur Mall – Ruiru
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:items-center">
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

      <div className="text-center mt-6 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Omar Carpets. All rights reserved.
      </div>
    </footer>
  );
}
