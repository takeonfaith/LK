import { HeaderSize } from '@ui/types'
import React from 'react'

type Props = {
    size: HeaderSize
    children: ChildrenType
}

export function CreateHeader({ size, children }: Props) {
    switch (size) {
        case 1:
            return <h1 className="title">{children}</h1>
        case 2:
            return <h2 className="title">{children}</h2>
        case 3:
            return <h3 className="title">{children}</h3>
        case 4:
            return <h4 className="title">{children}</h4>
        case 5:
            return <h5 className="title">{children}</h5>
        case 6:
            return <h6 className="title">{children}</h6>
        default:
            return <h1 className="title">{children}</h1>
    }
}
