import { ALL_ROUTE, IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import { Title } from '@ui/title'
import { Align } from '@ui/types'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import styled from 'styled-components'
import PageLink from '../../../all-pages/ui/molecules/page-link'

const LinksListWrapper = styled.div<{ align: Align; wrapOnMobile: boolean }>`
    display: flex;
    flex-direction: column;

    .list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : align)};
        flex-wrap: wrap;
        gap: 10px;
    }

    @media (max-width: 500px) {
        .list {
            /* overflow-x: ${({ wrapOnMobile }) => (!wrapOnMobile ? 'auto' : 'visible')}; */
            flex-wrap: ${({ wrapOnMobile }) => (wrapOnMobile ? 'wrap' : 'nowrap')};
        }
    }
`

interface Props {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    restricted?: boolean
    wrapOnMobile?: boolean
}

const LinksList = ({ title, links, doNotShow, restricted, wrapOnMobile = true, align = 'center' }: Props) => {
    return (
        <LinksListWrapper align={align} wrapOnMobile={wrapOnMobile}>
            <Title size={4} align="left" visible={!!title} bottomGap>
                {title}
            </Title>
            <div className="list">
                {Object.values(links).map((el) => {
                    if (el.show !== false && doNotShow !== el.id)
                        return (
                            <PageLink
                                restricted={restricted}
                                key={el.id}
                                {...el}
                                color={el.color.length ? el.color : 'blue'}
                            />
                        )
                })}
                {doNotShow !== 'all' && <AllPagesLink />}
            </div>
        </LinksListWrapper>
    )
}

export default LinksList
