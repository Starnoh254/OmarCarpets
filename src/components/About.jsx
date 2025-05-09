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
          We specialize in premium carpets that combine beauty, comfort, and
          durability. Whether it's your home or office, our carpets bring warmth
          and elegance to every space.
        </p>

        <ul className="space-y-3 text-left">
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Handcrafted Quality
          </li>
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Affordable Pricing
          </li>
          <li className="flex items-center gap-2 font-body text-gray-700">
            ✅ Fast Delivery & Installation
          </li>
        </ul>
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
