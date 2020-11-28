import { getTwitterHref, TWITTER_INTENT_URL } from './TweetButton'

describe('getTwitterHref', () => {
  const title = 'How to add a Tweet Button to your blogposts!'
  const url = 'https://magrippis.com/blog/2020/add-a-tweet-button'
  const tags = ['typescript', 'nextjs', 'winning']

  it('points to the Web Intent URL', () => {
    const tweetHref = getTwitterHref({ title, url, tags })

    expect(tweetHref).toContain(TWITTER_INTENT_URL)
  })

  it('has the title in the query params', () => {
    const tweetHref = getTwitterHref({ title, url, tags })

    expect(tweetHref).toContain(
      'text=How+to+add+a+Tweet+Button+to+your+blogposts'
    )
  })

  it('has the url in the query params', () => {
    const tweetHref = getTwitterHref({ title, url, tags })

    expect(tweetHref).toContain(
      'url=https%3A%2F%2Fmagrippis.com%2Fblog%2F2020%2Fadd-a-tweet-button'
    )
  })

  it('has the via @jmagrippis in the query params', () => {
    const tweetHref = getTwitterHref({ title, url, tags })

    expect(tweetHref).toContain('via=jmagrippis')
  })

  it('has the comma-separated tags in the query params', () => {
    const tweetHref = getTwitterHref({ title, url, tags })

    expect(tweetHref).toContain('tags=typescript%2Cnextjs%2Cwinning')
  })

  it('errors out if the title is too long', () => {
    const url =
      'https://magrippis.com/blog/2020/this-url-will-be-truncated-by-twitter-so-its-length-should-not-affect-the-test-and-therefore-I-am-not-using-the-actual-title-below'
    const title =
      'This is soooooo long we should probably have a much catchier title what do you think friends? The problem is that we do want this to throw and now that the url is not a problem it is hard to get there without an absurdly long title!'
    const tags = [
      'the-hashtags',
      'are-not-helping',
      'neither',
      'crash',
      'EpicFail',
      'testInProduction',
    ]

    expect(() => getTwitterHref({ url, title, tags })).toThrow(
      `Sharing "${title}" results in a tweet that is too long`
    )
  })

  it('takes into account that the url will be shortened to a maximum of 23 characters', () => {
    const url =
      'https://magrippis-git-jma-47-share-url-and-custom-tweet-button-on-a.jmagrippis.vercel.app/blog/2020/how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress'
    const title = 'How to BDD and E2E test your responsive web app with Cypress'
    const tags = ['Typescript', 'Frontend']

    expect(() => getTwitterHref({ url, title, tags })).not.toThrow()
  })
})
