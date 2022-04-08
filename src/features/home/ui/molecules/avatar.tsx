import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi'

import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar?: string
    width?: string
    height?: string
    marginRight?: string
}

function Avatar({ avatar, width, height, marginRight }: Props) {
    const [isLoaded, setIsLoaded] = useState<boolean>(true)
    return (
        <Container width={width} height={height} marginRight={marginRight}>
            {avatar && isLoaded ? (
                <Img onLoadedData={() => setIsLoaded(true)} onError={() => setIsLoaded(false)} src={avatar} />
            ) : (
                <FiUser />
            )}
        </Container>
    )
}
