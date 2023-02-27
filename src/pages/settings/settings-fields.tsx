import React from 'react'
import { TSettingsFields } from './model'
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

const SettingsFields = ({ fields, asChild = false }: Props) => {
    return (
        <SettingsFieldsList asChild={asChild}>
            {fields.map((field) => {
                const { type, visible = true } = field
                if (visible) {
                    if (type === 'toggle') return <ToggleField {...field} />
                    if (type === 'photo') return <PhotoField {...field} />
                    if (type === 'choices') return <ChoicesField {...field} />
                    if (type === 'text') return <TextField {...field} />
                    if (type === 'display') return <DisplayField {...field} />
                    if (type === 'interval') return <IntervalField {...field} />
                    if (type === 'tel') return <TextField {...field} />
                    if (type === 'password') return <PasswordField {...field} />
                    if (type === 'link') return <LinkField {...field} />
                }
            })}
        </SettingsFieldsList>
    )
}

export default SettingsFields
