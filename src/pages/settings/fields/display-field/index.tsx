import React from 'react'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'

const DisplayField = (props: FieldProps) => {
    const handleClick = () => props?.action?.()
    return <TextFieldItem {...props} editable={false} onClick={handleClick} />
}

export default DisplayField
