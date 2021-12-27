import React from 'react'
import styled from 'styled-components'
import { SkeletonShape } from '.'

const ImageWrapper = styled.img``

interface Props {
    loading: boolean
    width: string
    height: string
    src: string
    alt?: string
}

const Image = ({ loading, src, height, width, alt = '' }: Props) => {
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

export default Image
