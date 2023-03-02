import React from 'react'
import { useModal } from 'widgets'
import { FieldProps } from '../../model'
import TextFieldItem from './text-field-item'
import TextFieldModal from './text-field-modal'

const TextField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<TextFieldModal {...props} />)
    }

    return <TextFieldItem {...props} onClick={handleClick} />
}

export default TextField
