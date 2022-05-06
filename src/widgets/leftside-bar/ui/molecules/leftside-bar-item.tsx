import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import React from 'react'
import LeftsideBarItemWrapper from '../atoms/leftside-bar-item-wrapper'

type Props = IRoute & { isCurrent: boolean }

const LeftsideBarItem = ({ path, icon, title, isCurrent, isAdmin, color }: Props) => {
    // const { isOpen } = menuModel.selectors.useMenu()

    return (
        <LeftsideBarItemWrapper
            to={path}
            className="leftside-bar-item"
            color={color}
            isCurrent={isCurrent}
            onClick={() => {
                menuModel.events.changeOpen({ isOpen: false, currentPage: path.slice(1, path.length) })
            }}
            title={title}
        >
            {isAdmin && <span className="admin">A</span>}
            {icon}
            <span>{title}</span>
        </LeftsideBarItemWrapper>
    )
}

export default React.memo(LeftsideBarItem)
