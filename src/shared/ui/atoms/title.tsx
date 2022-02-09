import React from 'react'
import styled from 'styled-components'

interface Props {
    children: JSX.Element | string | null | boolean
    size?: number
    align?: 'left' | 'center' | 'right'
    bottomGap?: boolean
    icon?: React.ReactNode
    iconColor?: string
}

const TitleWrapper = styled.div<{ align: 'left' | 'center' | 'right'; bottomGap: boolean; iconColor?: string }>`
    width: 100%;
    text-align: ${({ align }) => align};
    margin-bottom: ${({ bottomGap }) => (bottomGap ? '10px' : '0')};
    display: flex;
    align-items: center;

    svg {
        margin-right: 4px;
        color: ${({ iconColor }) => !!iconColor && iconColor};
    }
`

const Title = ({ icon, iconColor, children, size = 1, align = 'center', bottomGap = false }: Props) => {
    switch (size) {
        case 1:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
        case 2:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h2 className="title">{children}</h2>
                </TitleWrapper>
            )
        case 3:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h3 className="title">{children}</h3>
                </TitleWrapper>
            )
        case 4:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h4 className="title">{children}</h4>
                </TitleWrapper>
            )
        case 5:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h5 className="title">{children}</h5>
                </TitleWrapper>
            )
        case 6:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h6 className="title">{children}</h6>
                </TitleWrapper>
            )
        default:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {icon}
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
    }
}

export default Title
