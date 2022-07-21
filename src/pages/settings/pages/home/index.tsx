import { menuModel } from '@entities/menu'
import AddedElementsList from '@ui/added-elements-list'
import { Title } from '@ui/title'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import ToggleArea, { ToggleItem } from '../../../../shared/ui/organisms/toggle-area'
import { settingsModel } from '@entities/settings'
import { contextMenuModel } from '@entities/context-menu'

const HomeSettingsWrapper = styled.div``

const HomeSettings = () => {
    const { homeRoutes } = menuModel.selectors.useMenu()
    const { open } = useModal()
    const [toggles, setToggles] = useState<ToggleItem[]>([])
    const { settings } = settingsModel.selectors.useSettings()

    const deleteElementList = (elementId: string) => {
        if (settings) {
            const newPages = settings['settings-home-page'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-home-page',
                nameParam: 'pages',
                value: newPages.filter((item) => item !== elementId),
            })
            contextMenuModel.events.close()
        }
    }

    useEffect(() => {
        if (settings) {
            const { widgetPayment, widgetSchedule } = settings['settings-home-page'].property
            setToggles([
                {
                    title: '...',
                    state: false,
                    action: (state) => !state,
                },
                {
                    title: 'Расписание',
                    state: widgetSchedule as boolean,
                    action: (state) =>
                        settingsModel.events.updateSetting({
                            nameSettings: 'settings-home-page',
                            nameParam: 'widgetSchedule',
                            value: state,
                        }),
                },
                {
                    title: 'Оплата',
                    state: widgetPayment as boolean,
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
            <Title size={3} align="left" bottomGap>
                Разделы
            </Title>
            <AddedElementsList
                list={homeRoutes}
                onRemoveOne={(e) => deleteElementList(e)}
                onRemoveAll={() => null}
                onAddElement={() => open(<>Test</>)}
                setList={() => null}
                padding="0"
            />
            <ToggleArea title={'Виджеты'} toggles={toggles} setToggles={setToggles} />
        </HomeSettingsWrapper>
    )
}

export default HomeSettings
