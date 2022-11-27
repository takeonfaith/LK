import Checkbox from '@ui/atoms/checkbox'
import Notification from '@ui/notification'
import getLettersColors from '@utils/get-letters-colors'
import getNameFirstLetters from '@utils/get-name-first-letters'
import React, { useState } from 'react'
import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar?: string | null
    name: string
    width?: string
    height?: string
    marginRight?: string
    notifications?: number
    selected?: boolean
    checked?: boolean
    boxShadow?: string
}

function Avatar({ selected, name, avatar, width, height, marginRight, notifications, checked, boxShadow }: Props) {
    const [isLoaded, setIsLoaded] = useState<boolean>(true)
    const shortName = getNameFirstLetters(name)[0] + (getNameFirstLetters(name)[1] ?? '')

    return (
        <Container
            selected={selected}
            width={width}
            height={height}
            marginRight={marginRight}
            background={getLettersColors(name)}
            boxShadow={boxShadow}
        >
            {avatar && isLoaded ? (
                <Img round onLoadedData={() => setIsLoaded(true)} onError={() => setIsLoaded(false)} src={avatar} />
            ) : (
                <div className="name">{shortName}</div>
            )}
            <Checkbox
                invisibleOnFalse
                checked={checked ?? false}
                visible={checked !== undefined}
                setChecked={() => null}
            />
            <Notification left="80%" top="90%" outline="4px solid var(--schedule)" visible={!!notifications}>
                {notifications}
            </Notification>
        </Container>
    )
}
