import React from 'react'
import { Highlight } from './Highlight'

import mentoringImage from './mentoring.jpg'
import workshopsImage from './workshops.jpg'
import photographyImage from './photography.jpg'
import bloggingImage from './blogging.jpg'
import streamingImage from './streaming.jpg'
import activityFeedImage from './activity-feed.jpg'

export const Highlights = () => (
  <>
    <Highlight title="Mentoring" imgSrc={mentoringImage} />
    <Highlight
      title="Workshops"
      imgSrc={workshopsImage}
      className="bg-teal-200"
    />
    <Highlight title="Photography" imgSrc={photographyImage} />
    <Highlight
      title="Blogging"
      imgSrc={bloggingImage}
      className="bg-teal-200"
    />
    <Highlight title="Streaming" imgSrc={streamingImage} />
    <Highlight
      title="Activity Feed"
      imgSrc={activityFeedImage}
      className="bg-teal-200"
    />
  </>
)
