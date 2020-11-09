import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ShareCTA } from './ShareCTA'
import { getTwitterHref } from './TweetButton'

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

  it('has a button to copy the current url', async () => {
    const props = {
      url: 'https://magrippis.com/blog/2020/copying-also-works',
      title: 'Copying also works',
      tags: ['Typescript', 'Frontend', 'React'],
    }

    render(<ShareCTA {...props} />)

    userEvent.click(screen.getByRole('button', { name: /copy/i }))

    expect(navigator.clipboard.writeText).toBeCalledWith(
      'https://magrippis.com/blog/2020/copying-also-works'
    )

    // button changes to show we just copied
    await screen.findByRole('button', { name: /copied/i })
    // and back to the regular text
    await screen.findByRole('button', { name: /copy/i })
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
