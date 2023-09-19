import React from 'react'
import styled from 'styled-components'

const RoomsWrapper = styled.div<{ isCurrent: boolean; inModal: boolean; color?: string }>`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    width: 100%;
    overflow: hidden;
    position: relative;
    flex-wrap: ${({ inModal }) => inModal && 'wrap'};
    gap: 4px;

    &::after {
        content: '';
        display: ${({ inModal }) => inModal && 'none'};
        width: 30px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: ${({ isCurrent, color }) =>
            `linear-gradient(90deg, transparent, ${isCurrent ? color : 'var(--schedule)'})`};
    }

    .room {
        width: fit-content;
        background: ${({ isCurrent }) => (isCurrent ? 'var(--almostTransparent)' : 'var(--theme-2)')};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`

interface Props {
    rooms: string[]
    isCurrent?: boolean
    inModal?: boolean
    color?: string
}

const Rooms = ({ rooms, color, isCurrent = false, inModal = false }: Props) => {
    return !!rooms.length ? (
        <RoomsWrapper isCurrent={isCurrent} inModal={inModal} color={color}>
            {rooms.map((room) => (
                <span className="room" key={room}>
                    {room}
                </span>
            ))}
        </RoomsWrapper>
    ) : null
}

export default Rooms
