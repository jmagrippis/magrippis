import React from 'react'

export const Signup = () => (
  <section className="container flex flex-col sm:flex-row items-center m-auto p-8">
    <div className="text-xl mb-4">
      If you made it this far, how about subscribing to...
    </div>
    <iframe
      src="https://jmagrippis.substack.com/embed"
      height="320"
      frameBorder="0"
      scrolling="no"
      className="sm:flex-grow"
    ></iframe>
  </section>
)
