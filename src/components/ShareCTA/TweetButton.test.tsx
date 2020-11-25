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
      'https://magrippis.com/blog/2020/this-is-soooooo-long,-we-should-probably-have-a-catchier-title'
    const title =
      'This is soooooo long, we should probably have a catchier title'
    const tags = [
      'the-hashtags',
      'are-not-helping',
      'neither',
      'crash',
      'EpicFail',
    ]

    expect(() => getTwitterHref({ url, title, tags })).toThrow(
      'Sharing "This is soooooo long, we should probably have a catchier title" results in a tweet that is too long'
    )
  })
})
