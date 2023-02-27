import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import AddPagesList from '@features/all-pages/ui/organisms/add-pages-list'
import Avatar from '@features/home/ui/molecules/avatar'
import { changeEmail, changePhone } from '@shared/api/user-api'
import useTheme from '@shared/lib/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import { useModal } from 'widgets'
import getSettingsModel, { TFullSettingsModel } from '../model'

const getValue = (value: string | undefined) => (!value || value.length === 0 ? 'Не указан' : value)

const useSettings = () => {
    const { theme, switchTheme } = useTheme()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const { homeRoutes } = menuModel.selectors.useMenu()
    const { settings } = settingsModel.selectors.useSettings()
    const [fullSettings, setFullSettings] = useState<TFullSettingsModel | null>(null)

    const { widgetPayment, widgetSchedule } = settings['settings-home-page'].property

    useEffect(() => {
        setFullSettings({
            ...getSettingsModel({
                theme: { value: theme === 'dark', action: (value) => switchTheme(!(value as boolean)) },
                phone: {
                    value: user?.phone ?? '',
                    description: user?.phone,
                    action: (value) => changePhone((value ?? '') as string),
                    additionalActions: {
                        onSuccess: (value) => {
                            userModel.events.update({ key: 'phone', value: value as string })
                        },
                    },
                },
                email: {
                    value: user?.email ?? '',
                    description: getValue(user?.email),
                    action: (value) => changeEmail((value ?? '') as string),
                    additionalActions: {
                        onSuccess: (value) => {
                            userModel.events.update({ key: 'email', value: value as string })
                        },
                    },
                },
                avatar: {
                    value: user?.avatar,
                    description: 'Смена аватара',
                    icon: (
                        <Avatar
                            avatar={user?.avatar}
                            name={user?.fullName ?? ''}
                            width="22px"
                            height="22px"
                            marginRight="0"
                        />
                    ),
                },
                homepage: {
                    sections: {
                        value: homeRoutes,
                        additionalActions: {
                            onRemoveOne: (id) => deletePageFromHome(id as string, settings),
                            onAdd: () => open(<AddPagesList />),
                        },
                    },
                    widgets: {
                        schedule: {
                            value: widgetSchedule as boolean,
                            action: (state) =>
                                settingsModel.events.updateSetting({
                                    nameSettings: 'settings-home-page',
                                    nameParam: 'widgetSchedule',
                                    value: !(state as boolean | undefined) ?? false,
                                }),
                        },
                        payments: {
                            value: widgetPayment as boolean,
                            action: (state) =>
                                settingsModel.events.updateSetting({
                                    nameSettings: 'settings-home-page',
                                    nameParam: 'widgetPayment',
                                    value: !(state as boolean | undefined) ?? false,
                                }),
                        },
                    },
                },
            }),
        })
    }, [theme, homeRoutes, widgetSchedule, widgetPayment])

    return fullSettings
}

export default useSettings
