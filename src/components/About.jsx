import React from 'react'

export default function About() {
  return (
    <section className="bg-gray-50 px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          About Our Business
        </h2>
        <p className="font-body text-gray-600 text-lg mb-6">
          At Omar Modern Carpets, our mission is to provide our customers with
          exceptional, high-quality carpets that blend timeless elegance with
          modern design. We are committed to offering a diverse selection of
          carpets from around the world, each piece reflecting the artistry,
          craftsmanship, and cultural heritage of its origin. Our goal is to
          transform spaces by bringing luxury and sophistication into every
          home, while ensuring a seamless experience for our clients through
          personalized service, expert guidance, and an unwavering dedication to
          quality. Through our carpets, we strive to enrich lives with beauty,
          comfort, and a connection to global craftsmanship.
        </p>

        {/* <ul className="space-y-3 text-left">
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Handcrafted Quality
          </li>
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Affordable Pricing
          </li>
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Fast Delivery & Installation
          </li>
        </ul> */}
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src="/omarcarpets2.jpg" // use any carpet image you have or placeholder
          alt="About Carpet Business"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
