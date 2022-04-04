import { IRoute } from '@app/routes/routes'
import { menuModel } from '@entities/menu'
import React from 'react'
import LeftsideBarItemWrapper from '../atoms/leftside-bar-item-wrapper'

type Props = IRoute & { isCurrent: boolean }

const LeftsideBarItem = ({ path, icon: Icon, title, isCurrent, isAdmin }: Props) => {
    // const { isOpen } = menuModel.selectors.useMenu()
    return (
        <LeftsideBarItemWrapper
            to={path}
            className="leftside-bar-item"
            isCurrent={isCurrent}
            onClick={() => menuModel.events.changeOpen({ isOpen: false })}
            title={title}
        >
            {isAdmin && <span className="admin">A</span>}
            <Icon />
            <strong>{title}</strong>
        </LeftsideBarItemWrapper>
    )
}

export default React.memo(LeftsideBarItem)
