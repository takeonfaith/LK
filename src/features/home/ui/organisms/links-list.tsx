import { IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import List from '@ui/list'
import { Align } from '@ui/types'
import PageLink, { PageLinkProps } from '../../../all-pages/ui/molecules/page-link'
import React from 'react'

type Props = Pick<PageLinkProps, 'orientation' | 'shadow' | 'mode' | 'background'> & {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    restricted?: boolean
    wrapOnMobile?: boolean
}

const LinksList = ({
    title,
    links,
    doNotShow,
    restricted,
    orientation,
    background,
    shadow = true,
    wrapOnMobile = true,
    align = 'center',
    mode,
}: Props) => {
    return (
        <List
            direction="horizontal"
            scroll={false}
            gap={10}
            horizontalAlign={align}
            title={title}
            wrap
            wrapOnMobile={wrapOnMobile}
        >
            {Object.values(links).map((el) => {
                if (el?.show !== false && doNotShow !== el?.id)
                    return (
                        <PageLink
                            background={background}
                            orientation={orientation}
                            restricted={restricted}
                            key={el.id}
                            mode={mode}
                            shadow={shadow}
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
