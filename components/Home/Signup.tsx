import { ReactNode } from 'react'

import { TrackEvent } from '../../pages/_document'

const onIframeEnter = () => window.plausible(TrackEvent.SignupIframeEnter)

type Props = {
  prompt: ReactNode
}

export const Signup = ({ prompt }: Props) => (
  <section className="bg-gray-100 text-black w-full">
    <div className="container flex flex-col sm:flex-row items-center m-auto p-8">
      <div className="text-xl mb-4 max-w-readability">{prompt}</div>
      <iframe
        src="https://jmagrippis.substack.com/embed"
        height="320"
        frameBorder="0"
        scrolling="no"
        className="sm:flex-grow"
        onMouseEnter={onIframeEnter}
        title="sign-up with substack"
      />
    </div>
  </section>
)
