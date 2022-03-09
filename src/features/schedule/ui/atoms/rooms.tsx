import React from 'react'
import styled from 'styled-components'

const RoomsWrapper = styled.div<{ isCurrent: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    flex-wrap: wrap;
    width: 100%;

    .room {
        width: fit-content;
        background: ${({ isCurrent }) => (isCurrent ? 'var(--almostTransparent)' : 'var(--scheduleBg)')};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
    }
`

interface Props {
    rooms: string[]
    isCurrent?: boolean
}

const Rooms = ({ rooms, isCurrent = false }: Props) => {
    return !!rooms.length ? (
        <RoomsWrapper isCurrent={isCurrent}>
            {rooms.map((room) => (
                <span className="room" key={room}>
                    {room}
                </span>
            ))}
        </RoomsWrapper>
    ) : null
}

export default Rooms
