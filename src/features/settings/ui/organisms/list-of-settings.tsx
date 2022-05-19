import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import { ListWrapper } from '@ui/list'
import { Title } from '@ui/title'
import React from 'react'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'

const ListOfSettingsWrapper = styled(ListWrapper)<{ open: boolean }>`
    padding: 20px;
    height: 100%;
    background: var(--schedule);
    box-shadow: 0 0 1px #0000006b;

    @media (max-width: 600px) {
        transition: 0.2s;
        width: ${({ open }) => (open ? '100%' : '0')};
        max-width: ${({ open }) => (open ? '100%' : '0')};
        min-width: 0;
        padding: ${({ open }) => (open ? '20px' : '0')};
        opacity: ${({ open }) => (open ? '1' : '0')};
    }
`

interface Props {
    config: string[]
}

const ListOfSettings = ({ config }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    if (!allRoutes) return null

    return (
        <ListOfSettingsWrapper width="320px" open={!params?.id}>
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
