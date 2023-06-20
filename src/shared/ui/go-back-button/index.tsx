import { Button } from '@ui/button'
import React from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

interface Props {
    visible?: boolean
    text?: string
    fullWidth?: boolean
}

const GoBackButton = ({ visible = true, text = 'Назад', fullWidth = true }: Props) => {
    if (!visible) return null

    const history = useHistory()
    return (
        <Button
            text={text}
            onClick={() => history.goBack()}
            icon={<HiOutlineChevronLeft />}
            textColor="var(--reallyBlue)"
            background="transparent"
            width={fullWidth ? '100%' : undefined}
            padding="0"
            height="20px"
            align="left"
        />
    )
}

export default GoBackButton
