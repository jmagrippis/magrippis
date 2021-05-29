import { ReactEventHandler, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Image, { ImageProps } from 'next/image'

export const AppearingImage = ({ onLoad, ...props }: ImageProps) => {
  const [animatedStyle, set] = useSpring(() => ({
    opacity: 0,
  }))

  const handleOnLoad = useCallback<ReactEventHandler<HTMLImageElement>>(
    (event) => {
      set({
        opacity: 1,
      })
      onLoad && onLoad(event)
    },
    [set, onLoad]
  )

  return (
    <animated.div style={animatedStyle}>
      <Image {...props} onLoad={handleOnLoad} />
    </animated.div>
  )
}
