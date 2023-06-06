import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'
import List from '@shared/ui/list'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

const CustomBlock = styled.div`
    width: calc(100% - 2px);
    padding: 16px;
    margin: 1px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    padding: 16px;
    a {
        font-size: 0.95rem;
    }
`

type Props = {
    blocks: HelpfulPage[] | null
    isStaff: boolean
}

const BlocksList = ({ blocks, isStaff }: Props) => {
    if (!blocks) return null

    return (
        <>
            {blocks.map(({ title, links }, index) => {
                return (
                    <CustomBlock key={title + index}>
                        <Title size={4} align="left" bottomGap="16px">
                            {title}
                        </Title>
                        <List gap={16}>
                            {links.map(({ title: linkTitle, href, visible }, index) => {
                                if ((visible === 'staff' && !isStaff) || (visible === 'student' && isStaff)) {
                                    return null
                                }

                                return (
                                    <a key={linkTitle + index} href={href} target="_blank" rel="noreferrer">
                                        {linkTitle}
                                    </a>
                                )
                            })}
                        </List>
                    </CustomBlock>
                )
            })}
        </>
    )
}

export default BlocksList
