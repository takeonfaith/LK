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
    toggle: <ToggleField key={field.title} {...field} />,
    photo: <PhotoField key={field.title} {...field} />,
    choices: <ChoicesField key={field.title} {...field} />,
    text: <TextField key={field.title} {...field} />,
    display: <DisplayField key={field.title} {...field} />,
    interval: <IntervalField key={field.title} {...field} />,
    tel: <TextField key={field.title} {...field} />,
    password: <PasswordField key={field.title} {...field} />,
    link: <LinkField key={field.title} {...field} />,
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
