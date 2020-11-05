import Link from 'next/link'

export const CTA = () => (
  <section className="p-8 text-center text-2xl">
    <button
      type="button"
      className="transition duration-300 ease-in-out bg-purple-500 border border-transparent hover:bg-transparent hover:text-purple-600 hover:border-purple-500 font-semibold text-white py-2 px-4 rounded shadow hover:shadow-lg"
    >
      <Link href="/contact">
        <a>Get in touch</a>
      </Link>
    </button>
  </section>
)
