import { IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import List from '@ui/list'
import { Align, Direction } from '@ui/types'
import React from 'react'
import PageLink, { PageLinkMode } from '../../../all-pages/ui/molecules/page-link'

interface Props {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    restricted?: boolean
    wrapOnMobile?: boolean
    orientation?: Direction
    mode?: PageLinkMode
}

const LinksList = ({
    title,
    links,
    doNotShow,
    restricted,
    orientation,
    wrapOnMobile = true,
    align = 'center',
    mode,
}: Props) => {
    return (
        <List
            direction="horizontal"
            gap={10}
            horizontalAlign={align}
            title={title}
            scroll={false}
            wrap
            wrapOnMobile={wrapOnMobile}
        >
            {Object.values(links).map((el) => {
                if (el?.show !== false && doNotShow !== el?.id)
                    return (
                        <PageLink
                            orientation={orientation}
                            restricted={restricted}
                            key={el.id}
                            mode={mode}
                            {...el}
                            color={el.color.length ? el.color : 'blue'}
                        />
                    )
            })}
            {doNotShow !== 'all' && <AllPagesLink />}
        </List>
    )
}

export default LinksList
