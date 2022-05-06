import { ALL_ROUTE, IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import { Title } from '@ui/title'
import { Align } from '@ui/types'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import styled from 'styled-components'
import PageLink from '../../../all-pages/ui/molecules/page-link'

const LinksListWrapper = styled.div<{ align: Align }>`
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
`

interface Props {
    align?: Align
    title?: string
    links: IRoutes
}

const LinksList = ({ title, links, align = 'center' }: Props) => {
    return (
        <LinksListWrapper align={align}>
            <Title size={4} align="left" visible={!!title} bottomGap>
                {title}
            </Title>
            <div className="list">
                {Object.values(links).map((el) => {
                    if (el.show !== false)
                        return <PageLink key={el.id} {...el} color={el.color.length ? el.color : 'blue'} />
                })}
                <AllPagesLink />
            </div>
        </LinksListWrapper>
    )
}

export default LinksList
