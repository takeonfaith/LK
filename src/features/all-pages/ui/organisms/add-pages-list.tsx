import { menuModel } from '@entities/menu'
import LinksList from '@features/home/ui/organisms/links-list'
import { Error } from '@ui/error'
import { Title } from '@ui/title'
import React from 'react'
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
        height: 100%;
    }
`

const AddPagesList = () => {
    const { visibleRoutes } = menuModel.selectors.useMenu()

    if (!visibleRoutes) return <Error text="Не удалось загрузить пункты меню(" />

    return (
        <AddPagesListWrapper>
            <Title size={3} align="left" bottomGap>
                Добавить страницы
            </Title>
            <div className="links-wrapper">
                <LinksList
                    shadow={false}
                    orientation="horizontal"
                    mode="add"
                    doNotShow="all"
                    align="left"
                    background="transparent"
                    links={visibleRoutes}
                />
            </div>
        </AddPagesListWrapper>
    )
}

export default AddPagesList
