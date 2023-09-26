import { Colors } from '@shared/constants'
import { Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const LinkImageBlockWrapper = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: blur(3px);
        transform: scale(1.2);
    }

    h3 {
        bottom: 15px;
        left: 15px;
        position: absolute;
        background: ${Colors.purple.main};
        padding: 5px 10px;
        border-radius: var(--brLight);
    }
`

interface Props {
    title: string
    link: string | null | undefined
    image: string
}

const LinkImageBlock = ({ title, link, image }: Props) => {
    return !!link ? (
        <LinkImageBlockWrapper href={link}>
            <img src={image} alt="" loading="lazy" />
            <Title size={3}>{title}</Title>
        </LinkImageBlockWrapper>
    ) : null
}

export default LinkImageBlock
