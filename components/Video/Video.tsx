import React from 'react'

type Props = {
  src: string
}

export const Video = ({ src }: Props) => (
  <video autoPlay loop muted>
    <source src={src} type="video/mp4" />
  </video>
)
