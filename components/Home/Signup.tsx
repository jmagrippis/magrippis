import React, { ReactNode } from 'react'

import { TrackEvent } from '../../pages/_document'

const onIframeEnter = () => window.plausible(TrackEvent.SignupIframeEnter)

type Props = {
  prompt: ReactNode
}

export const Signup = ({ prompt }: Props) => (
  <section className="container flex flex-col sm:flex-row items-center m-auto p-8">
    <div className="text-xl mb-4" style={{ maxWidth: '60ch' }}>
      {prompt}
    </div>
    <iframe
      src="https://jmagrippis.substack.com/embed"
      height="320"
      frameBorder="0"
      scrolling="no"
      className="sm:flex-grow"
      onMouseEnter={onIframeEnter}
    ></iframe>
  </section>
)
