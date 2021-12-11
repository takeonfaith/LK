import React from 'react'
import styled from 'styled-components'

interface Props {
    children: JSX.Element | string
    size?: number
    align?: 'left' | 'center' | 'right'
    bottomGap?: boolean
}

const TitleWrapper = styled.div<{ align: 'left' | 'center' | 'right'; bottomGap: boolean }>`
    width: 100%;
    text-align: ${({ align }) => align};
    margin-bottom: ${({ bottomGap }) => (bottomGap ? '10px' : '0')};
`

const Title = ({ children, size = 1, align = 'center', bottomGap = false }: Props) => {
    switch (size) {
        case 1:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
        case 2:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h2 className="title">{children}</h2>
                </TitleWrapper>
            )
        case 3:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h3 className="title">{children}</h3>
                </TitleWrapper>
            )
        case 4:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h4 className="title">{children}</h4>
                </TitleWrapper>
            )
        case 5:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h5 className="title">{children}</h5>
                </TitleWrapper>
            )
        case 6:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h6 className="title">{children}</h6>
                </TitleWrapper>
            )
        default:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap}>
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
    }
}

export default Title
