import React from 'react'
import Link from 'next/link'

import githubIcon from './github-mark.svg'
import instagramIcon from './instagram.svg'
import twitterIcon from './twitter.svg'

export const Header = () => (
  <header className="w-full bg-purple-200">
    <div className="m-auto container flex flex-row items-center p-4">
      <div className="flex-grow">
        <Link href="/">
          <a>jmagrippis</a>
        </Link>
      </div>
      <ul className="flex flex-row">
        <li>
          <Link href="/milestones">
            <a className="text-purple-700">milestones</a>
          </Link>
        </li>
        <li className="ml-4">
          <a
            href="https://github.com/jmagrippis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="link to jmagrippis’ github profile"
              title="github profile"
              className="w-6"
            />
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://www.instagram.com/jmagrippis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="link to jmagrippis’ instagram profile"
              title="instagram profile"
              className="w-6"
            />
          </a>
        </li>
        <li className="ml-4">
          <a
            href="https://twitter.com/jmagrippis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              alt="link to jmagrippis’ twitter profile"
              title="twitter profile"
              className="w-6"
            />
          </a>
        </li>
      </ul>
    </div>
  </header>
)
