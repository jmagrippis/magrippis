import React from 'react'
import Link from 'next/link'

import StarIcon from './star.svg'
import MailIcon from './mail.svg'
import GithubIcon from './github-mark.svg'
import InstagramIcon from './instagram.svg'
import TwitterIcon from './twitter.svg'

export const Header = () => (
  <header className="w-full bg-purple-200">
    <div className="m-auto container flex flex-row items-center p-4">
      <div className="flex-grow">
        <Link href="/">
          <a>jmagrippis</a>
        </Link>
      </div>
      <ul className="flex flex-row text-purple-500">
        <li>
          <Link href="/milestones">
            <a className="transition duration-300 text-purple-600 hover:text-purple-800">
              <span className="hidden sm:inline">milestones</span>
              <span className="sm:hidden">
                <StarIcon title="Milestones feed" width="1.5rem" />
              </span>
            </a>
          </Link>
        </li>
        <li className="ml-4">
          <Link href="/contact">
            <a className="transition duration-300 hover:text-purple-700">
              <MailIcon title="Contact Johnny" width="1.5rem" />
            </a>
          </Link>
        </li>
        <li className="ml-4">
          <a
            className="transition duration-300 hover:text-purple-700"
            href="https://github.com/jmagrippis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon title="Johnny's github" width="1.5rem" />
          </a>
        </li>
        <li className="ml-4">
          <a
            className="transition duration-300 hover:text-purple-700"
            href="https://www.instagram.com/jmagrippis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon title="Johnny's instagram" width="1.5rem" />
          </a>
        </li>
        <li className="ml-4">
          <a
            className="transition duration-300 hover:text-purple-700"
            href="https://twitter.com/jmagrippis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon title="Johnny's twitter" width="1.5rem" />
          </a>
        </li>
      </ul>
    </div>
  </header>
)
