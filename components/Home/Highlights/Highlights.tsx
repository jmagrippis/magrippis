import React from 'react'
import cn from 'classnames'

import { Highlight } from './Highlight'
import { highlightsContent } from './highlightsContent'

export const Highlights = () => (
  <>
    {highlightsContent.map(({ title, imgSrc, description, link }, i) => (
      <Highlight
        key={title}
        title={title}
        imgSrc={imgSrc}
        description={description}
        link={link}
        className={cn({
          'bg-teal-200': i % 2,
        })}
      />
    ))}
  </>
)
