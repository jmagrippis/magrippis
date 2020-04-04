import React from 'react'
import Link from 'next/link'

export const Header = () => (
  <header className="w-full bg-purple-200 p-4">
    <div className="m-auto container flex flex-row">
      <div className="flex-grow">
        <Link href="/">
          <a>jmagrippis</a>
        </Link>
      </div>
      <ul className="flex flex-row">
        <li className="ml-4">
          <a href="https://github.com/jmagrippis">github</a>
        </li>
        <li className="ml-4">
          <a href="https://www.instagram.com/jmagrippis/">instagram</a>
        </li>
        <li className="ml-4">
          <a href="https://twitter.com/jmagrippis">twitter</a>
        </li>
      </ul>
    </div>
  </header>
)
