import Image from 'next/image'
import { animated } from 'react-spring'

import { useRoleTransitions } from './useRoleTransitions'

export const Hero = () => {
  const transition = useRoleTransitions()

  return (
    <section className="p-8">
      <div className="container flex items-center justify-center flex-wrap sm:flex-nowrap">
        <span className="rounded-full shadow-lg overflow-hidden h-64 w-64 mb-8 sm:mr-16 sm:mb-0 relative">
          <Image
            src="/images/hero.jpg"
            title="Johnny’s avatar"
            alt="Johnny’s avatar"
            width={256}
            height={256}
            priority
          />
        </span>
        <div className="text-right" style={{ flexBasis: '60ch' }}>
          <p className="text-3xl mb-1">Hi, I’m Johnny and I’m</p>

          <p className="relative text-4xl text-purple-600 h-24 sm:h-auto">
            {transition((style, role) => (
              <animated.span
                className="absolute right-0 text-shadow-md"
                key={role}
                style={style}
              >
                {role}
              </animated.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
