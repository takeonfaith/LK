import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div<{
    align: 'left' | 'center' | 'right'
    bottomGap: boolean | string
    iconColor?: string
}>`
    width: 100%;
    text-align: ${({ align }) => align};
    margin-bottom: ${({ bottomGap }) => (typeof bottomGap === 'string' ? bottomGap : bottomGap ? '10px' : '0')};
    display: inline-flex;
    align-items: center;
    justify-content: ${({ align }) =>
        align ? (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : align) : 'center'};

    svg {
        min-width: 16px;
        margin-right: 4px;
        color: ${({ iconColor }) => !!iconColor && iconColor};
    }
`

const RedStar = styled.span`
    color: var(--red);
    margin-right: 5px;
`

interface Props {
    children: JSX.Element | string | null | boolean
    size?: number
    align?: 'left' | 'center' | 'right'
    bottomGap?: boolean | string
    icon?: React.ReactNode
    iconColor?: string
    required?: boolean
}

const Title = ({ icon, iconColor, children, required, size = 1, align = 'center', bottomGap = false }: Props) => {
    switch (size) {
        case 1:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
        case 2:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h2 className="title">{children}</h2>
                </TitleWrapper>
            )
        case 3:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h3 className="title">{children}</h3>
                </TitleWrapper>
            )
        case 4:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h4 className="title">{children}</h4>
                </TitleWrapper>
            )
        case 5:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h5 className="title">{children}</h5>
                </TitleWrapper>
            )
        case 6:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h6 className="title">{children}</h6>
                </TitleWrapper>
            )
        default:
            return (
                <TitleWrapper align={align} bottomGap={bottomGap} iconColor={iconColor}>
                    {required && <RedStar>*</RedStar>}
                    {icon}
                    <h1 className="title">{children}</h1>
                </TitleWrapper>
            )
    }
}

export default Title
