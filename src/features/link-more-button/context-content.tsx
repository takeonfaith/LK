import { IRoute } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { settingsModel } from '@entities/settings'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import { FiPlus, FiXCircle } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../all-pages/ui/atoms/icon'
import React from 'react'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import addPageToHome from '@features/all-pages/lib/add-page-to-home'
import addPageToSidebar from '@features/all-pages/lib/add-page-to-sidebar'
import { menuModel } from '@entities/menu'
import deletePageFromSidebar from '@features/all-pages/lib/delete-page-from-sidebar'
import { REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { userModel } from '@entities/user'

const ContextContentWrapper = styled.div`
    .top {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 7px;
    }
`

const PageName = styled.span`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 0.8em;
    font-weight: 500;
`

const ContextContent = (props: IRoute) => {
    const { id, icon, title, color } = props
    const { settings } = settingsModel.selectors.useSettings()
    const { data } = userModel.selectors.useUser()
    const menu = menuModel.selectors.useMenu()
    const isAddedToHome = (settings['settings-home-page'].property.pages as string[])?.find((el) => el === id)
    const isAddedToMenu = (settings['settings-customize-menu'].property.pages as string[])?.find((el) => el === id)
    const requiredLeftsideBarItems =
        data.user?.user_status === 'staff' ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG

    const handleAddToHome = () => {
        addPageToHome(id, settings)
        contextMenuModel.events.close()
    }

    const handleAddToMenu = () => {
        addPageToSidebar(id, settings, Object.keys(menu.leftsideBarRoutes ?? {}).length ?? 0, requiredLeftsideBarItems)
        contextMenuModel.events.close()
    }

    return (
        <ContextContentWrapper>
            <div className="top">
                <Icon color={color} size={22}>
                    {icon}
                </Icon>
                <PageName>{title}</PageName>
            </div>
            <Divider />
            {isAddedToHome ? (
                <Button
                    text="Убрать с главной"
                    icon={<FiXCircle />}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={() => {
                        deletePageFromHome(id, settings)
                        contextMenuModel.events.close()
                    }}
                />
            ) : (
                <Button
                    text="Добавить на главную"
                    icon={<FiPlus />}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={handleAddToHome}
                />
            )}
            {!isAddedToMenu ? (
                <Button
                    text="Добавить в меню"
                    icon={<FiPlus />}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={handleAddToMenu}
                />
            ) : (
                <Button
                    text="Убрать из меню"
                    icon={<FiXCircle />}
                    width="100%"
                    align="left"
                    background="var(--schedule)"
                    onClick={() => deletePageFromSidebar(id, settings, requiredLeftsideBarItems)}
                />
            )}
        </ContextContentWrapper>
    )
}

export default ContextContent
