import { render, screen } from '@testing-library/react'

import { getTwitterHref, ShareCTA } from './ShareCTA'

describe('ShareCTA', () => {
  it('has a link to tweet', () => {
    const props = {
      url: 'https://magrippis.com/blog/2020/tweeting-works',
      title: 'Tweeting works',
      tags: ['Typescript', 'Frontend'],
    }

    render(<ShareCTA {...props} />)

    const tweetAnchor = screen.getByRole('link', { name: /tweet/i })
    expect(tweetAnchor.getAttribute('href')).toBe(
      'https://twitter.com/intent/tweet?url=https%3A%2F%2Fmagrippis.com%2Fblog%2F2020%2Ftweeting-works&text=Tweeting+works+%E2%9A%9B%EF%B8%8F&hashtags=Typescript%2CFrontend&via=jmagrippis'
    )
  })
})

describe('getTwitterHref', () => {
  it('errors out if the title is too long', () => {
    const props = {
      url:
        'https://magrippis.com/blog/2020/this-is-soooooo-long,-we-should-probably-have-a-catchier-title',
      title: 'This is soooooo long, we should probably have a catchier title',
      tags: ['the-hashtags', 'are-not-helping', 'neither', 'crash', 'EpicFail'],
    }

    expect(() => getTwitterHref(props)).toThrow(
      'Sharing "This is soooooo long, we should probably have a catchier title" results in a tweet that is too long'
    )
  })
})
