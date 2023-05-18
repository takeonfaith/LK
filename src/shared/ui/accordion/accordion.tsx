import React, { useState } from 'react'
import { AccordionTitle } from './title'
import { AccordionWrapper } from './wrapper'

interface Props {
    children: React.ReactNode
    title: string
    show?: boolean
    height: number
    confirmed?: boolean
}

export const Accordion = (props: Props) => {
    const { children, title, height, confirmed = false, show = false } = props

    const [open, setOpen] = useState<boolean>(show)

    return (
        <AccordionWrapper height={height} open={open}>
            <AccordionTitle title={title} confirmed={confirmed} setOpenArea={setOpen} />
            <div className="inputs">{children}</div>
        </AccordionWrapper>
    )
}
