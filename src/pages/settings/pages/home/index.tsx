import { menuModel } from '@entities/menu'
import AddedElementsList from '@ui/added-elements-list'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const HomeSettingsWrapper = styled.div``

const HomeSettings = () => {
    const { homeRoutes } = menuModel.selectors.useMenu()
    const { open } = useModal()
    return (
        <HomeSettingsWrapper>
            <Title size={3} align="left" bottomGap>
                Разделы
            </Title>
            <AddedElementsList
                list={homeRoutes}
                onRemoveOne={() => null}
                onRemoveAll={() => null}
                onAddElement={() => open(<>Test</>)}
                setList={() => null}
                padding="0"
            />
        </HomeSettingsWrapper>
    )
}

export default HomeSettings
