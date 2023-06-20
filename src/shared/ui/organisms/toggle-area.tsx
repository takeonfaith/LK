import React, { useCallback } from 'react'
import styled from 'styled-components'
import ToggleItem from '../toggle-item'

export interface ToggleItem {
    title: string
    state: boolean | false
    action?: (state: boolean) => void
}

interface Props {
    title: string
    toggles: ToggleItem[]
    setToggles: (toggles: ToggleItem[]) => void
    disabled?: boolean
    disabledClickMessage?: string
}

const Wrapper = styled.div`
    width: 100%;
    h2 {
        margin-top: 10px;
    }
`

const ToggleArea = ({ title, toggles, setToggles, disabled }: Props) => {
    const handleChange = useCallback(
        (id: number, action?: (state: boolean) => void) => {
            toggles[id].state = !toggles[id].state
            setToggles([...toggles])
            action && action?.(toggles[id].state)
        },
        [toggles, setToggles],
    )

    return (
        <Wrapper>
            {!!title.length && <h2>{title}</h2>}
            {toggles.map(({ title, state, action }, i) => {
                return (
                    <ToggleItem
                        disabled={disabled}
                        key={title}
                        title={title}
                        state={state}
                        action={() => handleChange(i, action)}
                    />
                )
            })}
        </Wrapper>
    )
}

export default ToggleArea
