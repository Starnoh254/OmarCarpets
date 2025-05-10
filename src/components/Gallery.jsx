import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required!
import { Carousel } from "react-responsive-carousel";

export default function Gallery() {
  const images = [
    {
      src: "/omarcarpets1.jpg",
      caption: "Elegant Living Room Vibe",
    },
    {
      src: "/omarcarpets5.jpg",
      caption: "Warm and Cozy Touch",
    },
    {
      src: "/omarcarpets3.jpg",
      caption: "Modern Carpet Style",
    },
    {
      src: "/omarcarpets2.jpg",
      caption: "Elegant Living Room Vibe",
    },
    {
      src: "/omarcarpets4.jpg",
      caption: "Warm and Cozy Touch",
    },
    {
      src: "/omarcarpets6.jpg",
      caption: "Modern Carpet Style",
    },
    {
      src: "/omarcarpets7.jpg",
      caption: "Elegant Living Room Vibe",
    },
    {
      src: "/omarcarpets8.jpg",
      caption: "Elegant Living Room Vibe",
    },
  ];
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800">
        Our Gallery
      </h2>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        dynamicHeight={false}
        interval={3000}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt={img.caption}
              className="rounded-lg shadow-lg"
            />
            <p className="legend">{img.caption}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
