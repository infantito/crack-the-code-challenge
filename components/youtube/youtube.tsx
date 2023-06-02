import type { YoutubeProps } from '@typings'
import { YOUTUBE } from '@constants'

const Youtube = (props: YoutubeProps) => {
  const { width, height, src, title } = props

  const source = YOUTUBE.replace('#{key}', src)

  const link = `${source}&autoplay=false`

  return (
    <iframe
      className="video"
      title={title || 'CrackTheCode video'}
      width={width}
      height={height}
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  )
}

export default Youtube
