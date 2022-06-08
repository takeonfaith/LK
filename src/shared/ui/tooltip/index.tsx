import { Align, VerticalAlign } from '@ui/types'
import React, { useState } from 'react'
import { TooltipWrapper } from './styles'

interface Props {
    children: ChildrenType
    content: ChildrenType
    direction?: VerticalAlign | Align
}

const Tooltip = ({ children, content, direction }: Props) => {
    const [active, setActive] = useState(false)

    return (
        <TooltipWrapper onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {children}
            {active && (
                <div className={`box ${direction || 'top'}`}>
                    {/* Content */}
                    {content}
                </div>
            )}
        </TooltipWrapper>
    )
}

export default Tooltip
