import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-20 bg-gray-100 text-gray-800">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-10">
        Get in Touch
      </h2>

      <div className="text-center max-w-2xl mx-auto space-y-6">
        <p className="text-lg">
          We'd love to hear from you! Whether you want a custom carpet or just
          want to say hi.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>hello@carpetbiz.com</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-xl text-blue-600 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
