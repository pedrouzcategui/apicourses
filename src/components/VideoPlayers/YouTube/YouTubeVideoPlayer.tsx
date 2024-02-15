import { VideoPlayerProps } from "../types"

interface YouTubeVideoPlayerAllowOptions {
    accelerometer: boolean
    autoplay?: boolean
    clipboardWrite: boolean
    encryptedMedia: boolean
    gyroscope: boolean
    pictureInPicture: boolean
    webShare: boolean
}

interface YouTubeVideoPlayerProps extends VideoPlayerProps {
    title?: string //This is more youtube actually
    allowOptions?: YouTubeVideoPlayerAllowOptions
    allowFullScreen?: boolean
}

export const YouTubeVideoPlayer = ({ width, height, src }: YouTubeVideoPlayerProps) => {
    return (
        <iframe height={height} width={width} src={src} />
    )
}