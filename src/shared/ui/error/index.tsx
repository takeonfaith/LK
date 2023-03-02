import React from 'react'
import { Title } from '../title'
import Sad from '../../images/sad-emoji.gif'
import { ErrorContainer } from './styles'

export type ErrorProps = {
    text: string
    image?: string | JSX.Element
    size?: string
    children?: ChildrenType
}

export function Error({ text, image, size, children }: ErrorProps) {
    return (
        <ErrorContainer size={size}>
            <div className="image">
                {typeof image === 'string' || !image ? <img src={image || Sad} alt="груфтим(" /> : image}
            </div>
            <Title size={3} bottomGap="20px">
                {text}
            </Title>
            {children && <div className="error-content">{children}</div>}
        </ErrorContainer>
    )
}
