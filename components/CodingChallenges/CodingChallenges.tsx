import { NextSeo } from 'next-seo'

import { ParsedFrontMatter } from '*.mdx'
import { ChallengeSnippet } from './ChallengeSnippet'
import { getSeoProps } from '../getSeoProps'
import { Signup } from '../Home/Signup'

const title = 'Coding Challenges | jmagrippis'
const description =
  'Handcrafted coding challenges, inspired by my real experiences delivering software for startups, established companies and side-hustles'

type Props = { pages: ParsedFrontMatter[] }

export const CodingChallenges = ({ pages }: Props) => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <div className="bg-prism flex-grow flex flex-col items-center justify-center">
      <main className="text-lg max-w-readability-lg py-4 flex-grow">
        <h1 className="text-4xl p-4">Coding Challenges</h1>
        <ul className="mb-8 bg-white shadow">
          {pages.map((page) => (
            <ChallengeSnippet key={page.__resourcePath} {...page} />
          ))}
        </ul>
      </main>
      <Signup prompt="Sign-up to have these delivered straight to your inbox!" />
    </div>
  </>
)
