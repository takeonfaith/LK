import { IRoute, IRoutes } from '@app/routes/routes'
import { userModel } from '@entities/user'
import { useSettings } from '@utils/contexts/settings-context'
import useCurrentPage from '@utils/hooks/use-current-page'
import useIsAccessibleRoute from '@utils/hooks/use-is-accessible-route'
import React from 'react'
import { FiCompass } from 'react-icons/fi'
import getChosenRoutes from '../../lib/get-chosen-routes'
import getNotChosenRoutes from '../../lib/get-not-chosen-routes'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'
import LeftsideBarItemButton from '../molecules/leftside-bar-item-button'
import LeftsideBarDropdown from './leftside-bar-dropdown'

interface Props {
    searchList: IRoutes | null
}

const LeftsideBarList = ({ searchList }: Props) => {
    const { data } = userModel.selectors.useUser()
    const currentPage = useCurrentPage()
    const { setting } = useSettings<number[]>('menu')
    const isAccessible = useIsAccessibleRoute()

    return !searchList ? (
        <LeftsideBarListWrapper>
            {Object.values(getChosenRoutes(setting, data)).map((props: IRoute) => {
                return (
                    isAccessible(props.title) && (
                        <LeftsideBarItem {...props} key={props.id} isCurrent={currentPage.id === props.id} />
                    )
                )
            })}
            <LeftsideBarDropdown
                heading={<LeftsideBarItemButton key={0} id={0} icon={FiCompass} title={'Другое'} />}
                height={Object.values(getNotChosenRoutes(setting, data)).length * 58}
            >
                {Object.values(getNotChosenRoutes(setting, data)).map((props: IRoute) => {
                    return isAccessible(props.title) ? (
                        <LeftsideBarItem {...props} key={props.id} isCurrent={currentPage.id === props.id} />
                    ) : (
                        <></>
                    )
                })}
            </LeftsideBarDropdown>
        </LeftsideBarListWrapper>
    ) : (
        <LeftsideBarListWrapper>
            {Object.values(searchList).map((props: IRoute) => {
                return (
                    isAccessible(props.title) && (
                        <LeftsideBarItem {...props} key={props.id} isCurrent={currentPage.id === props.id} />
                    )
                )
            })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
