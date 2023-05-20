import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Direction } from '@ui/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageLinkContent from './page-link-content'
import React from 'react'

const LinkWrapper = styled(Link)<{ width: number | string }>`
    width: ${({ width }) => (typeof width === 'number' ? `calc(125px * ${width} + ${(width - 1) * 10}px)` : width)};

    @media (max-width: 500px) {
        max-width: ${({ width }) => (typeof width === 'number' ? `calc(32vw * ${width} - 16px)` : width)};
        min-width: ${({ width }) => (typeof width === 'number' ? `calc(32vw * ${width} - 16px)` : width)};
        width: ${({ width }) => (typeof width === 'number' ? `calc(32vw * ${width} - 16px)` : width)};
    }
`

const AddPageWrapper = styled.div<{ width: number | string }>`
    width: ${({ width }) => (typeof width === 'number' ? `calc(125px * ${width} + ${(width - 1) * 10}px)` : width)};
`

export type PageLinkMode = 'use' | 'add'

export type PageLinkProps = IRoute & {
    orientation?: Direction
    shadow?: boolean
    restricted?: boolean
    mode?: PageLinkMode
    background?: string
}

const PageLink = (props: PageLinkProps) => {
    const { title, shortTitle, path, orientation = 'vertical', restricted = false, mode = 'use' } = props
    const maxWordLength = restricted ? 20 : 50
    const linkWidth = (shortTitle ?? title).length > 23 && !restricted ? 2 : 1

    if (mode === 'add')
        return (
            <AddPageWrapper width={orientation === 'vertical' ? linkWidth : '100%'}>
                <PageLinkContent {...props} mode={mode} maxWordLength={maxWordLength} />
            </AddPageWrapper>
        )

    return (
        <LinkWrapper
            to={path}
            onClick={() => {
                menuModel.events.changeOpen({ isOpen: false, currentPage: path.slice(1, path.length) })
            }}
            width={orientation === 'vertical' ? linkWidth : '100%'}
        >
            <PageLinkContent {...props} maxWordLength={maxWordLength} mode={mode} />
        </LinkWrapper>
    )
}

export default PageLink
