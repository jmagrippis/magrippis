import React from 'react'
import Link from 'next/link'

export const CTA = () => (
  <section className="p-8 bg-teal-100 text-center text-2xl">
    <button className="transition duration-300 ease-in-out bg-purple-500 border-transparent hover:bg-transparent hover:text-purple-600 hover:border-purple-500 font-semibold text-white py-2 px-4 border rounded">
      <Link href="/contact">
        <a>Get in touch</a>
      </Link>
    </button>
  </section>
)
