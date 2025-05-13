import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function Hero() {
    useEffect(() => {
      Aos.init();
    },[])
  return (
    <section id="home" className="bg-white px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left side */}
      <div className="flex-1 text-center md:text-left" data-aos="fade-left">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Discover Cozy Carpets
        </h1>
        <p className="font-body text-gray-600 text-lg mb-6">
          Premium quality carpets that turn your space into a home. Soft,
          stylish, and long-lasting.
        </p>
        {/* <a
          href="#gallery"
          className="inline-block bg-amber-600 text-white font-body px-6 py-3 rounded-lg hover:bg-amber-700 transition"
        >
          View Gallery
        </a> */}
        <Link
          to="gallery"
          smooth={true}
          duration={500}
          className="cursor-pointer inline-block bg-amber-600 text-white font-body px-6 py-3 rounded-lg hover:bg-amber-700 transition"
        >
          View Gallery
        </Link>
      </div>

      {/* Right side - image */}
      <div className="flex-1" data-aos="fade-right">
        <img
          src="omarcarpets1.jpg" // put the image in public folder
          alt="Beautiful Carpet"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
