import React from 'react'
import styled from 'styled-components'

const GroupsWrapper = styled.div<{ isCurrent: boolean }>`
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${({ isCurrent }) => (isCurrent ? '#fff' : 'var(--text)')};
    width: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0.7em;
    font-weight: 600;
    margin-bottom: 5px;

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
}

const Groups = ({ groups, isCurrent }: Props) => {
    return groups ? (
        <GroupsWrapper isCurrent={isCurrent}>
            {groups.split(',').map((group) => {
                return <span key={group}>{group}</span>
            })}
        </GroupsWrapper>
    ) : null
}

export default Groups
