import { IRoutes } from '@app/routes/general-routes'
import AllPagesLink from '@features/all-pages/ui/molecules/all-pages-link'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import { Align } from '@ui/types'
import React from 'react'
import PageLink, { PageLinkProps } from '../../../all-pages/ui/molecules/page-link'

type Props = Pick<PageLinkProps, 'orientation' | 'shadow' | 'mode' | 'background'> & {
    links: IRoutes
    title?: string
    align?: Align
    doNotShow?: string
    restricted?: boolean
    wrapOnMobile?: boolean
}

const LinksList = ({ title, links, doNotShow, restricted, orientation, background, shadow = true, mode }: Props) => {
    return (
        <Flex d="column">
            <Title size={4} align="left" bottomGap>
                {title}
            </Title>
            <Flex gap="8px" $wrap>
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
            </Flex>
        </Flex>
    )
}

export default LinksList
