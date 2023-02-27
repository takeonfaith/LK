import React from 'react'
import { NameSettings } from '@entities/settings/model'
import { MdOutlinePassword } from 'react-icons/md'
import { FiLogOut, FiMail, FiPhone } from 'react-icons/fi'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import { FilterElementList } from '@shared/ui/added-elements-list'
import { MessageType } from '@shared/ui/types'

type TSettingsFieldType = 'link' | 'toggle' | 'display' | 'text' | 'photo' | 'choices' | 'interval' | 'password' | 'tel'
type TValueFieldType = FilterElementList | string[] | number[] | string | boolean
export type TSettingsFields = {
    title: string
    type: TSettingsFieldType
    action?: (value?: TValueFieldType) => void
    value?: TValueFieldType
    additionalActions?:
        | {
              onAdd?: (value?: TValueFieldType) => void
              onRemoveOne?: (value?: TValueFieldType) => void
              onSuccess?: (value?: TValueFieldType) => void
          }
        | { [key: string]: (value?: TValueFieldType) => void }
    description?: string
    message?: { title: string; type: MessageType; body?: string }
    icon?: React.ReactNode
    visible?: boolean
    subfields?: TSettingsFields[]
}

type TSettingsSection = {
    title: string
    fields: TSettingsFields[]
}

type Prop<T> = { value: T } & Pick<TSettingsFields, 'icon' | 'description' | 'action' | 'additionalActions'>

type SettingsFullProps = {
    theme: Prop<boolean>
    email: Prop<string>
    phone: Prop<string>
    avatar: Prop<string | undefined>
    homepage: { widgets: { schedule: Prop<boolean>; payments: Prop<boolean> }; sections: Prop<FilterElementList> }
}

export type TFullSettingsModel = {
    [section in keyof typeof NameSettings]: TSettingsSection[]
}

export type FieldProps = TSettingsFields

export type TSettingsModel = (props: SettingsFullProps) => TFullSettingsModel

const getSettingsModel: TSettingsModel = ({ theme, email, avatar, homepage, phone }) => ({
    'settings-appearance': [
        {
            title: 'Тема',
            fields: [
                {
                    title: 'Темная тема',
                    type: 'toggle',
                    value: theme.value,
                    action: theme.action,
                },
                // {
                //     title: 'По расписанию',
                //     type: 'toggle',
                //     value: false,
                //     action: () => null,
                //     subfields: [
                //         {
                //             title: 'Время',
                //             type: 'interval',
                //             value: [300, 1140],
                //             description: 'с 05:00 до 19:00 будет белая тема',
                //         },
                //     ],
                // },
            ],
        },
    ],
    'settings-customize-menu': [],
    'settings-home-page': [
        {
            title: 'Разделы быстрого доступа',
            fields: [
                {
                    title: '',
                    type: 'choices',
                    value: homepage.sections.value,
                    additionalActions: homepage.sections.additionalActions,
                    action: () => null,
                },
            ],
        },
        {
            title: 'Виджеты',
            fields: [
                {
                    title: 'Расписание',
                    type: 'toggle',
                    value: homepage.widgets.schedule.value,
                    action: homepage.widgets.schedule.action,
                },
                {
                    title: 'Оплаты',
                    type: 'toggle',
                    value: homepage.widgets.payments.value,
                    action: homepage.widgets.payments.action,
                },
            ],
        },
    ],
    'settings-personal': [
        {
            title: 'Данные',
            fields: [
                {
                    title: 'Фото профиля',
                    type: 'photo',
                    value: avatar.value,
                    icon: avatar.icon,
                    description: avatar.description,
                    action: () => null,
                },
                {
                    title: 'Email',
                    type: 'text',
                    value: email.value,
                    icon: <FiMail />,
                    description: email.description,
                    action: email.action,
                    additionalActions: email.additionalActions,
                },
                {
                    title: 'Телефон',
                    type: 'tel',
                    value: phone.value,
                    icon: <FiPhone />,
                    description: phone.description,
                    action: phone.action,
                    additionalActions: phone.additionalActions,
                },
                {
                    title: 'Пароль',
                    type: 'password',
                    value: '',
                    icon: <MdOutlinePassword />,
                    description: 'Смена пароля',
                    action: () => null,
                },
            ],
        },
        {
            title: 'Действия',
            fields: [
                // {
                //     title: 'Сменить аккаунт',
                //     type: 'link',
                //     icon: <FiUsers />,
                //     action: () => null,
                //     visible: 1 == 1,
                // },
                {
                    title: 'Выйти из аккаунта',
                    type: 'display',
                    icon: <FiLogOut />,
                    action: () =>
                        confirmModel.events.evokeConfirm({
                            message: 'Вы точно хотите выйти из аккаунта?',
                            onConfirm: userModel.events.logout,
                        }),
                },
            ],
        },
    ],
})

export default getSettingsModel
