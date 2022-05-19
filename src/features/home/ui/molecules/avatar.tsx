import getLettersColors from '@utils/get-letters-colors'
import getNameFirstLetters from '@utils/get-name-first-letters'
import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi'

import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar?: string
    name: string
    width?: string
    height?: string
    marginRight?: string
}

function Avatar({ name, avatar, width, height, marginRight }: Props) {
    const [isLoaded, setIsLoaded] = useState<boolean>(true)
    const shortName = getNameFirstLetters(name)[0] + (getNameFirstLetters(name)[1] ?? '')

    return (
        <Container width={width} height={height} marginRight={marginRight} background={getLettersColors(name)}>
            {avatar && isLoaded ? (
                <Img onLoadedData={() => setIsLoaded(true)} onError={() => setIsLoaded(false)} src={avatar} />
            ) : (
                <div className="name">{shortName}</div>
            )}
        </Container>
    )
}
