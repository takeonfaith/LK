import React from 'react'
import { EventBackgroundStyled, Icons } from './styles'

type Props = {
    icon: ChildrenType
    background: string
    noPadding?: boolean
}

const EventBackground = ({ icon, background, noPadding = false }: Props) => {
    return (
        <EventBackgroundStyled background={background} noPadding={noPadding}>
            <Icons>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
                <div>{icon}</div>
            </Icons>
        </EventBackgroundStyled>
    )
}

export default EventBackground
