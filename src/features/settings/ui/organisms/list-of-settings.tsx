import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import List from '@ui/list'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

const ListOfSettingsWrapper = styled(List)`
    padding: 20px;
    height: 100%;
    background: var(--schedule);
    box-shadow: 0 0 1px #0000006b;
`

interface Props {
    config: string[]
}

const ListOfSettings = ({ config }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <ListOfSettingsWrapper width="320px">
            <Title size={3} align="left" bottomGap>
                Настройки
            </Title>
            {config.map((id) => {
                return (
                    <PageLink
                        {...allRoutes[id]}
                        title={allRoutes[id].title.slice(11, allRoutes[id].title.length)}
                        key={id}
                        orientation="horizontal"
                        shadow={false}
                    />
                )
            })}
        </ListOfSettingsWrapper>
    )
}

export default ListOfSettings
