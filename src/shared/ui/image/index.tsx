import React from 'react'
import { SkeletonShape } from '../skeleton-shape'
import { ImageWrapper } from './styles'

export type ImageProps = {
    loading: boolean
    width: string
    height: string
    src: string
    alt?: string
}

export function Image({ loading, src, height, width, alt = '' }: ImageProps) {
    return !loading ? (
        <ImageWrapper src={src} alt={alt} height={height} width={width} />
    ) : (
        <SkeletonShape
            shape={'rect'}
            size={{
                width,
                height,
            }}
            margin="0"
        />
    )
}
