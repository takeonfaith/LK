import React, { useCallback } from 'react'
import styled from 'styled-components'
import SwitchToggle from '../molecules/switch-toggle'

export interface ToggleItem {
    title: string
    state: boolean | false
    action?: (state: boolean) => void
}

interface Props {
    title: string
    toggles: ToggleItem[]
    setToggles: (toggles: ToggleItem[]) => void
}

const Wrapper = styled.div`
    h2 {
        margin-top: 10px;
    }
`

const ToggleItemBlock = styled.div`
    padding: 7px 10px;
    margin: 5px 0;
    border-radius: var(--brLight);

    & > label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        user-select: none;
        cursor: pointer;

        h4 {
            color: var(--grey);
            font-weight: 600;
        }
    }

    &:hover {
        background: var(--mild-theme);
    }
`

const ToggleArea = ({ title, toggles, setToggles }: Props) => {
    const handleChange = useCallback(
        (id: number) => {
            toggles[id].state = !toggles[id].state

            setToggles([...toggles])
        },
        [toggles, setToggles],
    )

    return (
        <Wrapper>
            <h2>{title}</h2>
            {toggles.map(({ title, state, action }, i) => {
                return (
                    <ToggleItemBlock key={title}>
                        <label>
                            <h4>{title}</h4>
                            <SwitchToggle
                                id={i}
                                isToggled={state}
                                setIsToggled={() => {
                                    handleChange(i)
                                    action && action(!state)
                                }}
                                key={i}
                            />
                        </label>
                    </ToggleItemBlock>
                )
            })}
        </Wrapper>
    )
}

export default ToggleArea
