import { useState } from 'react'
import styled from 'styled-components'
import React from 'react'

interface Props {
    height: number
    heading: JSX.Element
    children?: JSX.Element[]
    visible?: boolean
}

const Accordion = styled.section`
    width: 100%;
    max-width: 270px;
    color: #383634;

    border-bottom: 1px solid rgba(56, 54, 52, 0.08);

    transition-property: padding-top, padding-bottom;
    transition: 0.3s ease-in-out;
`

const Content = styled.div`
    height: 0;
    opacity: 0;

    /* display: flex; */
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &.show {
        height: 180px; /* Если оставляю проценты, то визуализация перехода идёт по другому */
        opacity: 1;
    }
`

const LeftsideBarDropdown = ({ heading, children, height, visible = false }: Props) => {
    const [isVisible, setIsVisible] = useState(visible)

    return (
        <Accordion>
            <div className="accordion__heading" onClick={() => setIsVisible(!isVisible)}>
                {heading}
            </div>
            <Content
                className={(isVisible === true ? 'show' : '') + ' accordion__content'}
                style={isVisible === true ? { height: `${height}px` } : {}}
            >
                {children}
            </Content>
        </Accordion>
    )
}

export default LeftsideBarDropdown
