import React from 'react'

import { Highlight } from './Highlight'
import { highlightsContent } from './highlightsContent'

export const Highlights = () => (
  <>
    {highlightsContent.map(
      ({ title, imgSrc, description, link, imgTitle }, i) => (
        <Highlight
          key={title}
          title={title}
          imgSrc={imgSrc}
          imgTitle={imgTitle}
          description={description}
          link={link}
          alternate={!!(i % 2)}
        />
      )
    )}
  </>
)
