type Props = {
  src: string
}

export const Video = ({ src }: Props) => (
  <video autoPlay loop muted playsInline>
    <source src={src} type="video/mp4" />
  </video>
)
