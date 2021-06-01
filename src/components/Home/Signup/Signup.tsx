import { ReactNode, useRef } from 'react'

import useConvertKitScript from './useConvertKitScript'

const CONVERTKIT_FORM_UID = '3b954dbf56'

type Props = {
  prompt: ReactNode
}

export const Signup = ({ prompt }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useConvertKitScript(containerRef, CONVERTKIT_FORM_UID)

  return (
    <section className="bg-gray-100 text-black w-full">
      <div className="container flex flex-col sm:flex-row items-center p-8">
        <aside className="text-xl mb-4 sm:mr-4 max-w-readability">
          {prompt}
        </aside>
        <div className="flex-grow" ref={containerRef} />
      </div>
    </section>
  )
}
