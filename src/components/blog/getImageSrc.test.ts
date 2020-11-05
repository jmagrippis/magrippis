import { getImageSrc, IMAGE_PREFIX } from './getImageSrc'

describe('getImageSrc', () => {
  it('prefixes everything with `/images/blog/`', () => {
    const title = 'How to use the new core Image component'

    const imageSrc = getImageSrc(title)

    expect(imageSrc).toContain(IMAGE_PREFIX + '/')
    expect(imageSrc.indexOf(IMAGE_PREFIX)).toBe(0)
  })

  it('replaces spaces with dashes', () => {
    const title = 'How to use the new core Image component'

    expect(getImageSrc(title)).toContain(
      'How-to-use-the-new-core-Image-component'
    )
  })

  it('removes dots', () => {
    const title = 'Write.More.Tests'

    expect(getImageSrc(title)).toContain('WriteMoreTests')
  })

  it('suffixes everything with `.jpg`', () => {
    const title = 'hero'

    const imageSrc = getImageSrc(title)

    expect(imageSrc).toContain('.jpg')
    expect(imageSrc.slice(-4)).toBe('.jpg')
  })
})
