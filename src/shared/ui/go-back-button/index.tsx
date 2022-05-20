import { Button } from '@ui/button'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

interface Props {
    text?: string
}

const GoBackButton = ({ text = 'Назад' }: Props) => {
    const history = useHistory()
    return (
        <Button
            text={text}
            onClick={() => history.goBack()}
            icon={<FiArrowLeft />}
            textColor="var(--reallyBlue)"
            background="transparent"
            width="100%"
            align="left"
        />
    )
}

export default GoBackButton
