import React from 'react'
import { TSettingsFields, TSettingsFieldType } from './model'
import { TextField, ToggleField, LinkField, DisplayField, PhotoField, ChoicesField, IntervalField } from './fields'
import styled from 'styled-components'
import PasswordField from './fields/password-field'

const SettingsFieldsList = styled.div<{ asChild: boolean }>`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: ${({ asChild }) => (asChild ? '12px' : '0')};

    &::before {
        content: '';
        position: absolute;
        height: calc(100% - 12px);
        width: 2px;
        background-color: var(--almostTransparentOpposite);
        display: ${({ asChild }) => (asChild ? 'block' : 'none')};
        left: -1px;
        top: 6px;
    }
`

type Props = {
    fields: TSettingsFields[]
    asChild?: boolean
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

const SettingsFields = ({ fields, asChild = false }: Props) => {
    return (
        <SettingsFieldsList asChild={asChild}>
            {fields.map((field) => {
                const { type, visible = true } = field
                if (visible) {
                    return Fields(field)[type]
                }
            })}
        </SettingsFieldsList>
    )
}

export default SettingsFields
