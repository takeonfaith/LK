import React from 'react'
import styled from 'styled-components'
import { SwitchToggle } from '../molecules'

const ToggleItemBlock = styled.div`
    padding: 0px 12px;
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--brLight);

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

        b {
            color: var(--text);
            opacity: 0.7;
            font-weight: 500;
            font-size: 0.85rem;
        }
    }

    &:hover {
        background: var(--mild-theme);
    }
`

type Props = {
    title: string
    state: boolean
    action: (state: boolean) => void
    icon?: React.ReactNode
}

const ToggleItem = ({ title, state, action, icon }: Props) => {
    const handleToggle = () => {
        action(!state)
    }

    return (
        <ToggleItemBlock key={title}>
            {icon && <div className="icon">{icon}</div>}
            <label>
                <b>{title}</b>
                <SwitchToggle id={Math.random().toString()} isToggled={state} setIsToggled={handleToggle} key={title} />
            </label>
        </ToggleItemBlock>
    )
}

export default ToggleItem
