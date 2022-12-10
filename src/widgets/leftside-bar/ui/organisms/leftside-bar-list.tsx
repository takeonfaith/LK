import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { SkeletonShape } from '@ui/skeleton-shape'
import React, { useMemo } from 'react'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'

const LeftsideBarList = () => {
    const { leftsideBarRoutes, currentPage } = menuModel.selectors.useMenu()

    const currentPageId = useMemo(() => {
        const paths = window.location.hash.split('/')

        // to keep current page indicator while on subpage
        if (paths.length > 2 && paths[1]) {
            return paths[1]
        }

        return currentPage?.id
    }, [currentPage])

    if (!leftsideBarRoutes)
        return (
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '300px',
                }}
            />
        )

    return (
        <LeftsideBarListWrapper>
            {Object.values(leftsideBarRoutes)
                .filter((el) => el !== undefined)
                .map((props: IRoute) => {
                    return <LeftsideBarItem {...props} key={props?.id} isCurrent={currentPageId === props?.id} />
                })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
