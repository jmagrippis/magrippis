import React from 'react'
import cn from 'classnames'

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
          className={cn({
            'bg-teal-100': i % 2,
          })}
        />
      )
    )}
  </>
)
