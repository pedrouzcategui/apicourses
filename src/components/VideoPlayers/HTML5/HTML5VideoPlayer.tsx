'use client'

import type { VideoPlayerProps } from '../types';

export const HTML5VideoPlayer = ({ src, autoPlay = false }: VideoPlayerProps) => {
    return (
        <video controls src={src} autoPlay={autoPlay} >
        </video>
    )
}


