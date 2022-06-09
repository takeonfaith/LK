import { HeaderSize } from '@ui/types'
import React from 'react'

type Props = {
    size: HeaderSize
    children: ChildrenType
    width?: string
}

const style = (width?: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
})

export function CreateHeader({ size, children, width }: Props) {
    switch (size) {
        case 1:
            return (
                <h1 className="title" style={style(width)}>
                    {children}
                </h1>
            )
        case 2:
            return (
                <h2 className="title" style={style(width)}>
                    {children}
                </h2>
            )
        case 3:
            return (
                <h3 className="title" style={style(width)}>
                    {children}
                </h3>
            )
        case 4:
            return (
                <h4 className="title" style={style(width)}>
                    {children}
                </h4>
            )
        case 5:
            return (
                <h5 className="title" style={style(width)}>
                    {children}
                </h5>
            )
        case 6:
            return (
                <h6 className="title" style={style(width)}>
                    {children}
                </h6>
            )
        default:
            return (
                <h1 className="title" style={style(width)}>
                    {children}
                </h1>
            )
    }
}
