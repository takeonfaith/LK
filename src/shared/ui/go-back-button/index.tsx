import { Button } from '@ui/button'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

interface Props {
    visible?: boolean
    text?: string
}

const GoBackButton = ({ visible = true, text = 'Назад' }: Props) => {
    if (!visible) return null

    const history = useHistory()
    return (
        <Button
            text={text}
            onClick={() => history.goBack()}
            icon={<FiArrowLeft />}
            textColor="var(--reallyBlue)"
            background="transparent"
            width="100%"
            padding="0"
            height="20px"
            align="left"
        />
    )
}

export default GoBackButton
