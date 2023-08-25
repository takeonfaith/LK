import { IRoute } from '@app/routes/general-routes'
import { teachersHiddenRoutes } from '@app/routes/teacher-routes'
import { PageLink } from '@features/all-pages'
import Flex from '@shared/ui/flex'
import React from 'react'

export const LinkList = () => {
    const links: IRoute[] = [
        teachersHiddenRoutes()['structure-of-the-university'],
        teachersHiddenRoutes()['social-environment'],
        teachersHiddenRoutes()['psychological-help'],
        teachersHiddenRoutes()['health-care'],
        teachersHiddenRoutes()['wifi-at-the-university'],
        teachersHiddenRoutes()['brandbook'],
        teachersHiddenRoutes()['addresses-and-contacts'],
    ]
    return (
        <Flex gap="8px" $wrap>
            {links.map((el) => {
                return <PageLink key={el.id} {...el} />
            })}
        </Flex>
    )
}
