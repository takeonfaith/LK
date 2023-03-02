import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'

const LinkField = (props: FieldProps) => {
    return <TextFieldItem {...props} rightIcon={<FiChevronRight />} />
}

export default LinkField
