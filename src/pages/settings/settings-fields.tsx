import React from 'react'
import { TSettingsFields, TSettingsFieldType, TValueFieldType } from './model'
import { TextField, ToggleField, LinkField, DisplayField, PhotoField, ChoicesField, IntervalField } from './fields'
import styled from 'styled-components'
import PasswordField from './fields/password-field'
import { settingsModel } from '@entities/settings'
import { NameSettings } from '@entities/settings/model'

const SettingsFieldsList = styled.div<{ asChild: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;
    margin-left: ${({ asChild }) => (asChild ? '16px' : '0')};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({ asChild }) => (asChild ? 'block' : 'none')};
        left: -2px;
        opacity: 0.4;
        top: 6px;
    }
`

type Props = {
    fields: TSettingsFields[]
    asChild?: boolean
    settingsName: NameSettings | undefined
}

const Fields = (field: TSettingsFields): Record<TSettingsFieldType, ChildrenType> => ({
    toggle: <ToggleField {...field} />,
    photo: <PhotoField {...field} />,
    choices: <ChoicesField {...field} />,
    text: <TextField {...field} />,
    display: <DisplayField {...field} />,
    interval: <IntervalField {...field} />,
    tel: <TextField {...field} />,
    password: <PasswordField {...field} />,
    link: <LinkField {...field} />,
})

const SettingsFields = ({ fields, settingsName, asChild = false }: Props) => {
    const defaultSettingsAction = (id: string | undefined) => {
        if (!id || !settingsName) return () => null

        return (val: TValueFieldType | undefined) => {
            // eslint-disable-next-line no-console
            console.log(val)

            settingsModel.events.updateSetting({
                nameSettings: settingsName,
                nameParam: id,
                value: val as string[] | boolean | string,
            })
        }
    }
    return (
        <SettingsFieldsList asChild={asChild}>
            {fields.map((field) => {
                const action = field.action ?? defaultSettingsAction(field.id)

                const { type, visible = true } = field
                if (visible) {
                    return Fields({ ...field, action, settingsName })[type]
                }
            })}
        </SettingsFieldsList>
    )
}

export default SettingsFields
