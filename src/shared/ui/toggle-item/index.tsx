import React from 'react'
import styled from 'styled-components'
import { SwitchToggle } from '../molecules'

const ToggleItemBlock = styled.div<{ disabled?: boolean }>`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    min-width: fit-content;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};

    .icon {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
            opacity: 0.4;
        }
    }

    & > label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        user-select: none;
        cursor: pointer;
        min-width: fit-content;
        gap: 8px;

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
            white-space: nowrap;
        }
    }

    &:hover {
        background: var(--theme-1);
    }
`

type Props = {
    title: string
    state: boolean
    action: (state: boolean) => void
    icon?: React.ReactNode
    disabled?: boolean
}

const ToggleItem = ({ title, state, action, icon, disabled }: Props) => {
    const handleToggle = () => {
        action(!state)
    }

    return (
        <ToggleItemBlock key={title} disabled={disabled}>
            {icon && <div className="icon">{icon}</div>}
            <label>
                <b>{title}</b>
                <SwitchToggle id={title} isToggled={state} setIsToggled={handleToggle} key={title} />
            </label>
        </ToggleItemBlock>
    )
}

export default ToggleItem
