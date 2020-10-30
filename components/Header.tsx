import Link from 'next/link'
import { useRouter } from 'next/router'

import StarIcon from './star.svg'
import BookIcon from './book.svg'
import MailIcon from './mail.svg'
import GithubIcon from './github-mark.svg'
import InstagramIcon from './instagram.svg'
import TwitterIcon from './twitter.svg'

export const Header = () => {
  const { pathname } = useRouter()

  const HomeElement = pathname === '/' ? 'h2' : 'div'

  return (
    <header className="w-full bg-gray-800 text-purple-100">
      <div className="m-auto container flex flex-row items-center p-4">
        <HomeElement className="flex-grow">
          <Link href="/">
            <a className="transition duration-300 hover:text-purple-300">
              jmagrippis
            </a>
          </Link>
        </HomeElement>
        <ul className="flex flex-row">
          <li>
            <Link href="/milestones">
              <a className="transition duration-300 hover:text-purple-300">
                <span className="hidden sm:inline ">milestones</span>
                <span className="sm:hidden">
                  <StarIcon title="Milestones feed" width="1.5rem" />
                </span>
              </a>
            </Link>
          </li>
          <li className="ml-3">
            <Link href="/blog">
              <a className="transition duration-300 hover:text-purple-300">
                <span className="hidden sm:inline">blog</span>
                <span className="sm:hidden">
                  <BookIcon title="Blogposts by Johnny" width="1.5rem" />
                </span>
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/contact">
              <a className="transition duration-300 hover:text-purple-300">
                <MailIcon title="Contact Johnny" width="1.5rem" />
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <a
              className="transition duration-300 hover:text-purple-300"
              href="https://github.com/jmagrippis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon title="Johnny's github" width="1.5rem" />
            </a>
          </li>
          <li className="ml-4">
            <a
              className="transition duration-300 hover:text-purple-300"
              href="https://www.instagram.com/jmagrippis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon title="Johnny's instagram" width="1.5rem" />
            </a>
          </li>
          <li className="ml-4">
            <a
              className="transition duration-300 hover:text-purple-300"
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
}
