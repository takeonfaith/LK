import React from 'react'
import styled from 'styled-components'
import { RetakeLink } from '@features/schedule/types/retake-types'
import { Title } from '@ui/title'

const Container = styled.div`
    width: 600px;

    @media (max-width: 800px) {
        width: 100%;
        padding: 10px;
    }
`

const CustomLink = styled.a`
    display: inline-block;
    font-size: 18px;
    line-height: 22px;
    :not(:first-child) {
        margin-top: 20px;
    }
`

type Props = Pick<RetakeLink, 'fullTitle' | 'links'>

const RetakeModal = ({ links, fullTitle }: Props) => {
    return (
        <Container>
            <Title size={2} align="left">
                {fullTitle}
            </Title>
            {links.map(({ href, title }, i) => (
                <CustomLink key={i + title} href={href} target="_blank">
                    {title}
                </CustomLink>
            ))}
        </Container>
    )
}

export default RetakeModal
