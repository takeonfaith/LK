import { FieldProps } from '@pages/settings/model'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { useModal } from 'widgets'
import TextFieldItem from '../text-field/text-field-item'
import IntervalFieldModal from './modal'

const IntervalField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<IntervalFieldModal {...props} />)
    }
    return <TextFieldItem {...props} editable={false} onClick={handleClick} icon={<FiClock />} />
}

export default IntervalField
