import React from 'react'
import styled from 'styled-components'

const GroupsWrapper = styled.div<{ isCurrent: boolean; inModal: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0.7em;
    font-weight: 600;
    flex-wrap: ${({ inModal }) => inModal && 'wrap'};
    gap: 5px;

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

    span {
        background: ${({ isCurrent }) => (isCurrent ? 'var(--almostTransparent)' : 'var(--scheduleBg)')};
        padding: 0px 8px;
        height: 21px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }
`

interface Props {
    groups?: string
    isCurrent: boolean
    inModal?: boolean
}

const Groups = ({ groups, isCurrent, inModal = false }: Props) => {
    return groups ? (
        <GroupsWrapper isCurrent={isCurrent} inModal={inModal}>
            {groups.split(',').map((group) => {
                return <span key={group}>{group}</span>
            })}
        </GroupsWrapper>
    ) : null
}

export default Groups
