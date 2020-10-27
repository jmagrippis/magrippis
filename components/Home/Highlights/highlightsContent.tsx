import React from 'react'
import Link from 'next/link'

import { HighlightType } from './Highlight'

export const highlightsContent: HighlightType[] = [
  {
    title: 'Consulting',
    imgSrc: '/images/highlights/consulting.jpg',
    imgTitle: 'Talking "Implementation Details"',
    description: [
      'I love solving problems and I’ve been doing that professionally as a Software Engineer for almost two decades!',
      'The longer I am in the business, the more I seek out projects where my problem-solving will fundamentally affect the lives of more people:',
      'Like in Babylon Health where we raised Series C to fund the mission of bringing affordable healthcare to everyone.',
      'Or in Funding Circle where I worked on instant decisioning for loan applications, including to businesses affected by COVID-19.',
      'If you have an ambitious project that needs delivering, and are looking for an Engineering Consultant who is an expert in Typescript, GraphQL and React, feel free to reach out.',
    ],
  },
  {
    title: 'Mentoring',
    imgSrc: '/images/highlights/mentoring.jpg',
    imgTitle: 'Lovely sculpture of two birds I snapped in Barbados',
    description: [
      'My most fulfilling work.',
      'A lot of my time is spent teaching others, but mentoring holds a special place in my heart. Its one-to-one nature, the paradoxically unique struggles every one of us has, observing progress over a long period of time... It’s fascinating.',
      'Plus, it’s the most effective way to help someone grow! I love talking at meetups: it reaches a lot of people and helps some a little bit... but focusing on a single person to help tremendously is a different kind of payoff.',
      'I can only have so many mentees, but do get in touch if you are interested: we may work something out 😄',
    ],
  },
  {
    title: 'Workshops',
    imgSrc: '/images/highlights/workshops.jpg',
    imgTitle: 'Mingling with colleagues and attendees',
    description: [
      'I am a firm believer in the power of workshops. Even those your employer forces you to attend! It’s all in the power of the facilitators to design something engaging that leaves you with key learnings you can apply immediately.',
      'I run workshops focused in career-changing into frontend engineering, and leveling up as a software engineer. From zero to deploying your javascript game to the internet, from an associate engineer to approaching software startup problems like a senior.',
      'Holding a successful workshop during a pandemic is going to be a tough problem I will definitely be having a go at...',
    ],
  },
  {
    title: 'Photography',
    imgSrc: '/images/highlights/photography.jpg',
    imgTitle:
      'Did not travel far for this one: It’s the view from my Balcony in London!',
    link: 'https://www.instagram.com/jmagrippis/',
    description: [
      'Higher up than “blogging”, because a picture is worth a thousand words, and I have a lot to say 📷',
      'I’ve managed to travel to quite a few fantastic places around the world, and although first priority is to experience them, I do set aside time for dedicated photo shoots!',
      'Even now under lockdown, when the fantastic places are all in my London flat! This one is from my balcony and has quickly become a favourite.',
      <>
        I mostly shoot with a <strong>Sony a7R IV</strong> and my go-to lens
        currently is the <strong>Sony FE 85mm F1.4 GM</strong>.
      </>,
    ],
  },
  {
    title: 'Blogging',
    imgSrc: '/images/highlights/blogging.jpg',
    imgTitle: 'Overlooking a national park in Patagonia',
    link: '/blog',
    description: [
      <>
        I love writing in general, and sometimes I structure my thoughts into
        something coherent, and they make their way into{' '}
        <Link href="/blog">
          <a className="underline text-purple-600">the blog</a>
        </Link>
        !
      </>,
      <>
        There is stuff I’ve written all over the internets, some{' '}
        <a
          href="https://medium.com/@jmagrippis"
          className="underline text-purple-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          controversially hosted on Medium
        </a>
        , but people reached out to me through this very site to have my content
        in one place and not behind a paywall so... this is the start!
      </>,
      'Everything new will be released there, so check it out 🚀',
    ],
  },
  {
    title: 'Streaming',
    imgSrc: '/images/highlights/streaming.jpg',
    imgTitle: 'Live streaming on Twitch!',
    link: 'https://www.twitch.tv/jmagrippis',
    description: [
      'After a decade of trying out new tech by building prototypes in isolation and solely for my own amusement, I’ve decided to get with the times and stream myself hacking them together!',
      'I’m also noticing a gap in the market, in that there are plenty of talented coders streaming, but I haven’t found any Pair Programming streams...',
      'This is the “greenest” section by far, so if you’ve got advice, or want to Pairway to Heaven with me, do get in touch 😄',
    ],
  },
  {
    title: 'Milestones Feed',
    imgSrc: '/images/highlights/milestones.jpg',
    imgTitle: 'A tree growing in Patagonia',
    link: '/milestones',
    description: [
      <>
        You may follow{' '}
        <a
          href="https://www.instagram.com/jmagrippis/"
          className="underline text-purple-600"
        >
          the gram
        </a>{' '}
        for a more broad and ephemeral "activity feed", but this is a curated
        and persisted{' '}
        <Link href="/milestones">
          <a className="underline text-purple-600">list of highlights</a>
        </Link>
        !
      </>,
      'When I deploy something during a stream, when I toy with a side-project on the weekend, when I digital nomad my way into working remotely in a different hemisphere for a month, this is where you’d find a bit of detail.',
      'Also likely to see early thoughts when I start a new video game, and summations when I’m done with it, placements in Beach Volleyball tournaments, as well as when I finally manage to stick an L-sit to handstand transition on the parallettes.',
    ],
  },
]
