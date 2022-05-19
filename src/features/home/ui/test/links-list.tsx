import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'
import PageLink, { PageLinkProps } from './page-link'

const LinksListWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .list {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
`

interface Props {
    title: string
    links: PageLinkProps[]
}

const LinksList = ({ title, links }: Props) => {
    return (
        <LinksListWrapper>
            <Title size={4} align="left" bottomGap>
                {title}
            </Title>
            <div className="list">
                {links.map((link) => {
                    return <PageLink {...link} key={link.title} />
                })}
            </div>
        </LinksListWrapper>
    )
}

export default LinksList
