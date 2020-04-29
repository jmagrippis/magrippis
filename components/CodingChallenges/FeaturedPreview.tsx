import React from 'react'

import { FeaturedPreview as CyclingElementPreview } from './2020/CyclingElement/FeaturedPreview'

const titlesToPreviews = {
  'Cycling Element': CyclingElementPreview,
}

type Props = {
  title: string
}

export const FeaturedPreview = ({ title }: Props) => {
  const Preview = titlesToPreviews[title]

  return Preview ? <Preview /> : null
}
