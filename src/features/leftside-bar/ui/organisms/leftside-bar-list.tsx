import React from 'react'
import { FiCompass } from 'react-icons/fi'
import { useSettings } from '../../../../shared/lib/contexts/settings-context'
import useCurrentPage from '../../../../shared/lib/hooks/use-current-page'
import getChosenRoutes from '../../lib/get-chosen-routes'
import getNotChosenRoutes from '../../lib/get-not-chosen-routes'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'
import LeftsideBarItemButton from '../molecules/leftside-bar-item-button'
import LeftsideBarDropdown from './leftside-bar-dropdown'

const LeftsideBarList = () => {
    const currentPage = useCurrentPage()
    const { setting } = useSettings<number[]>('menu')

    return (
        <LeftsideBarListWrapper>
            {Object.values(getChosenRoutes(setting)).map(({ icon, id, title, path }) => {
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
                height={Object.values(getNotChosenRoutes(setting)).length * 54}
            >
                {Object.values(getNotChosenRoutes(setting)).map(({ icon, id, title, path }) => {
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
