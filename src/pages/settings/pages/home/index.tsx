import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import AddPagesList from '@features/all-pages/ui/organisms/add-pages-list'
import AddedElementsList, { FilterElementList } from '@ui/added-elements-list'
import { Divider } from '@ui/divider'
import { Title } from '@ui/title'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import ToggleArea, { ToggleItem } from '../../../../shared/ui/organisms/toggle-area'
import React from 'react'

const HomeSettingsWrapper = styled.div``

const HomeSettings = () => {
    const { homeRoutes } = menuModel.selectors.useMenu()
    const { open } = useModal()
    const [toggles, setToggles] = useState<ToggleItem[]>([])
    const { settings } = settingsModel.selectors.useSettings()
    const [list, setList] = useState(homeRoutes)

    useEffect(() => {
        if (homeRoutes && list) {
            if (Object.keys(homeRoutes).length > Object.keys(list).length) {
                setList(homeRoutes)
            }
        }
    }, [homeRoutes])

    useEffect(() => {
        if (settings) {
            const { widgetPayment, widgetSchedule } = settings['settings-home-page'].property
            setToggles([
                {
                    title: 'Расписание',
                    state: !!widgetSchedule,
                    action: (state) =>
                        settingsModel.events.updateSetting({
                            nameSettings: 'settings-home-page',
                            nameParam: 'widgetSchedule',
                            value: state,
                        }),
                },
                {
                    title: 'Оплата',
                    state: !!widgetPayment,
                    action: (state) =>
                        settingsModel.events.updateSetting({
                            nameSettings: 'settings-home-page',
                            nameParam: 'widgetPayment',
                            value: state,
                        }),
                },
            ])
        }
    }, [settings])

    return (
        <HomeSettingsWrapper>
            <Title size={2} align="left" bottomGap>
                Разделы
            </Title>
            <AddedElementsList
                list={list}
                onRemoveOne={(id) => deletePageFromHome(id, settings)}
                onAddElement={() => open(<AddPagesList />)}
                setList={setList as React.Dispatch<React.SetStateAction<FilterElementList>>}
                padding="10px 0"
                height="fit-content"
            />
            <Divider margin="30px 0" />
            <ToggleArea title={'Виджеты'} toggles={toggles} setToggles={setToggles} />
        </HomeSettingsWrapper>
    )
}

export default HomeSettings
