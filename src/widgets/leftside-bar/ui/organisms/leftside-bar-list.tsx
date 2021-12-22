import React from 'react'
import { FiCompass } from 'react-icons/fi'
import { useSettings } from '@utils/contexts/settings-context'
import useCurrentPage from '@utils/hooks/use-current-page'
import getChosenRoutes from '../../lib/get-chosen-routes'
import getNotChosenRoutes from '../../lib/get-not-chosen-routes'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'
import LeftsideBarItemButton from '../molecules/leftside-bar-item-button'
import LeftsideBarDropdown from './leftside-bar-dropdown'
import { userModel } from '@entities/user'

const LeftsideBarList = () => {
    const currentPage = useCurrentPage()
    const { setting } = useSettings<number[]>('menu')
    const { data } = userModel.selectors.useUser()

    return (
        <LeftsideBarListWrapper>
            {Object.values(getChosenRoutes(setting, data)).map(({ icon, id, title, path }) => {
                return (
                    <LeftsideBarItem
                        key={id}
                        id={id}
                        icon={icon}
                        title={title}
                        path={path}
                        isCurrent={currentPage.id === id}
                    />
                )
            })}
            <LeftsideBarDropdown
                heading={<LeftsideBarItemButton key={0} id={0} icon={FiCompass} title={'Другое'} />}
                height={Object.values(getNotChosenRoutes(setting, data)).length * 54}
            >
                {Object.values(getNotChosenRoutes(setting, data)).map(({ icon, id, title, path }) => {
                    return (
                        <LeftsideBarItem
                            key={id}
                            id={id}
                            icon={icon}
                            title={title}
                            path={path}
                            isCurrent={currentPage.id === id}
                        />
                    )
                })}
            </LeftsideBarDropdown>
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
