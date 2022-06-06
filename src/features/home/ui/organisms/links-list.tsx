import { IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import List from '@ui/list'
import { Title } from '@ui/title'
import { Align } from '@ui/types'
import React from 'react'
import PageLink from '../../../all-pages/ui/molecules/page-link'

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
        </List>
    )
}

export default LinksList
