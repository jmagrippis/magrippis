import { useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

// should get these from the next/image type definitions
type ImageProps = Omit<
  JSX.IntrinsicElements['img'],
  'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'
> & {
  src: string
  quality?: number | string
  priority?: boolean
  unoptimized?: boolean
} & {
  width: number | string
  height: number | string
  unsized?: false
} & { offset: string }

export const AppearingImage = ({ offset, onLoad, ...props }: ImageProps) => {
  const [animatedStyle, set] = useSpring(() => ({
    opacity: 0,
  }))

  const handleOnLoad = useCallback(() => {
    set({
      opacity: 1,
    })
  }, [set])

  return (
    <animated.div style={animatedStyle}>
      <Image {...props} onLoad={handleOnLoad} />
    </animated.div>
  )
}
