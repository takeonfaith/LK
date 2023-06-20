import React from 'react'
import Sad from '../../images/sad-emoji.gif'
import Subtext from '../subtext'
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
            <Subtext fontSize="1rem" align="center" maxWidth="500px" width="auto">
                {text}
            </Subtext>
            {children && <div className="error-content">{children}</div>}
        </ErrorContainer>
    )
}
