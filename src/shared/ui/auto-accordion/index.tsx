import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AutoAccordionWrapper = styled.div<{ isOpen: boolean; bottomMargin?: boolean }>`
    display: grid;
    grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
    overflow: hidden;
    transition: 0.2s;
    width: 100%;
    margin-bottom: ${({ bottomMargin, isOpen }) => (bottomMargin && isOpen ? '12px' : '0')};
`
const AutoAccordionTitle = styled.div``

const AutoAccordionContent = styled.div<{ isOpen: boolean }>`
    min-height: 0;
    min-width: 0;
    transform: scale(${({ isOpen }) => (isOpen ? '1' : '0.98')});
    transition: 0.2s transform;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

type Props = {
    title?: string
    children: ChildrenType
    forceState?: boolean
    bottomMargin?: boolean
}

const AutoAccordion = ({ title, children, bottomMargin, forceState = false }: Props) => {
    const [isOpen, setIsOpen] = useState(forceState)

    useEffect(() => {
        setIsOpen(forceState)
    }, [forceState])

    const handleOpen = () => setIsOpen((prev) => !prev)

    return (
        <AutoAccordionWrapper isOpen={isOpen} bottomMargin={bottomMargin} onClick={handleOpen}>
            {title && <AutoAccordionTitle>{title}</AutoAccordionTitle>}
            <AutoAccordionContent isOpen={isOpen}>{children}</AutoAccordionContent>
        </AutoAccordionWrapper>
    )
}

export default AutoAccordion
