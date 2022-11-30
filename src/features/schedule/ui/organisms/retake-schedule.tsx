import retakeLinks from '@features/schedule/config/retakeLinks'
import { CenterPage } from '@ui/atoms'
import BlockWrapper from '@ui/block/styles'
import List from '@ui/list'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

const RetakeSchedule = () => {
    return (
        <CenterPage>
            <BlockWrapper alignItems="flex-start" height="fit-content">
                <ContentBlock>
                    {retakeLinks.map(({ title, links, href }, index) => {
                        if (href) {
                            return (
                                <CustomLink key={title + index} href={href}>
                                    {title}
                                </CustomLink>
                            )
                        }
                        if (links.length) {
                            return (
                                <LinksBlock key={title + index}>
                                    <Title size={3} align="left">
                                        {title}
                                    </Title>
                                    <List>
                                        {links.map(({ title, href }, index) => {
                                            return (
                                                <LinkListItem key={title + index}>
                                                    <CustomLink href={href} target="_blank" rel="noreferrer">
                                                        {title}
                                                    </CustomLink>
                                                </LinkListItem>
                                            )
                                        })}
                                    </List>
                                </LinksBlock>
                            )
                        }
                    })}
                </ContentBlock>
            </BlockWrapper>
        </CenterPage>
    )
}

const ContentBlock = styled.div`
    flex: 1 1 auto;
    background: var(--theme);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 24px;
`

const LinksBlock = styled.div`
    margin-top: 20px;
`

const LinkListItem = styled.li`
    list-style: disc;
    a {
        display: inline-block;
        margin-top: 10px;
    }
    :first-child a {
        margin-top: 20px;
    }
`

const CustomLink = styled.a`
    display: block;
    font-size: 18px;
    line-height: 22px;
    :not(:first-child) {
        margin-top: 20px;
    }
`

export default RetakeSchedule
