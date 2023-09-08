import React from 'react'
import { EventBackgroundStyled, Icons } from './styles'

type Props = {
    icon: ChildrenType
    background: string
}

const EventBackground = ({ icon, background }: Props) => {
    return (
        <EventBackgroundStyled background={background}>
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
