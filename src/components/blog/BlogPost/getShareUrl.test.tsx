import { getShareUrl } from './getShareUrl'

it('returns a url based on the production root, when no location given', () => {
  const path = '/blog/2020/politically-correct'

  expect(getShareUrl({ path })).toBe(
    'https://magrippis.com/blog/2020/politically-correct'
  )
})

it('returns a url based on the given location', () => {
  const path = '/blog/2021/vercel-is-awesome'
  const location = {
    protocol: 'https:',
    host: 'magrippis-j8pv28kv8.vercel.app',
  }

  expect(getShareUrl({ path, location })).toBe(
    'https://magrippis-j8pv28kv8.vercel.app/blog/2021/vercel-is-awesome'
  )
})
