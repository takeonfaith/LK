import React from 'react'
import { useModal } from 'widgets'
import { FieldProps } from '../../model'
import TextFieldItem from '../text-field/text-field-item'
import ChangeAvatar from '../../../../features/change-avatar'

const PhotoField = (props: FieldProps) => {
    const { open } = useModal()
    const handleClick = () => {
        open(<ChangeAvatar {...props} />)
    }
    return <TextFieldItem {...props} onClick={handleClick} />
}

export default PhotoField
