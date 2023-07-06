import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const AutoAccordionWrapper = styled.div<{ isOpen: boolean; bottomMargin?: boolean }>`
    display: grid;
    grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    overflow: hidden;
    transition: 0.2s grid-template-rows, 0.2s opacity, 0.2s margin-bottom;
    width: 100%;
    margin-bottom: ${({ bottomMargin, isOpen }) => (bottomMargin && isOpen ? '12px' : '0')};
`
const AutoAccordionTitle = styled.div``

const AutoAccordionContent = styled.div<{ isOpen: boolean }>`
    min-height: 0;
    transform: scale(${({ isOpen }) => (isOpen ? '1' : '0.98')});
    transition: 0.2s transform;
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

    return (
        <AutoAccordionWrapper isOpen={isOpen} bottomMargin={bottomMargin}>
            {title && <AutoAccordionTitle>{title}</AutoAccordionTitle>}
            <AutoAccordionContent isOpen={isOpen}>{children}</AutoAccordionContent>
        </AutoAccordionWrapper>
    )
}

export default AutoAccordion
