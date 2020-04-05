import React from 'react'

export const CTA = () => (
  <section className="p-8 bg-teal-200 text-center text-2xl">
    <button className="transition duration-300 ease-in-out bg-purple-500 border-transparent hover:bg-transparent hover:text-purple-600 hover:border-purple-500 font-semibold text-white py-2 px-4 border rounded">
      <a
        href="mailto:j@magrippis.com?subject=Hey, I was just on magrippis.com"
        target="_blank"
      >
        Get in touch
      </a>
    </button>
  </section>
)
