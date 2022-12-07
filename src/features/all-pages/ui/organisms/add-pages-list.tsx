import React from 'react'
import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import addPageToHome from '@features/all-pages/lib/add-page-to-home'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import { CustomizeLeftsideBarItem } from '@pages/settings/pages/customize-menu/ui/molecules'
import { Error } from '@ui/error'
import { Title } from '@ui/title'
import styled from 'styled-components'

const AddPagesListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 500px;
        height: 500px;
    }

    .links-wrapper {
        overflow-y: auto;
        padding-right: 8px;
        height: 100%;
    }
`

const AddPagesList = () => {
    const { visibleRoutes } = menuModel.selectors.useMenu()
    const menu = menuModel.selectors.useMenu()

    if (!visibleRoutes) return <Error text="Не удалось загрузить пункты меню(" />
    if (!menu.visibleRoutes) return null

    const { settings } = settingsModel.selectors.useSettings()

    const switchChosen = (id: string) => {
        if (menu?.homeRoutes?.[id]) {
            deletePageFromHome(id, settings)
        } else {
            addPageToHome(id, settings)
        }
    }

    return (
        <AddPagesListWrapper>
            <Title size={3} align="left" bottomGap>
                Добавить страницы
            </Title>
            <div className="links-wrapper">
                {Object.values(menu.visibleRoutes).map((el: IRoute, index) => {
                    return (
                        <CustomizeLeftsideBarItem
                            {...el}
                            key={index}
                            chosen={!!menu?.homeRoutes?.[el.id]}
                            switchMenuItem={switchChosen}
                        />
                    )
                })}
            </div>
        </AddPagesListWrapper>
    )
}

export default AddPagesList
