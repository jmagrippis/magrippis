export const IMAGE_PREFIX = '/images/blog'

export const getImageSrc = (title: string) =>
  `${IMAGE_PREFIX}/${title.replace(/ /g, '-').replace(/\./g, '')}.jpg`
