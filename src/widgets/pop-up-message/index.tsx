import { popUpMessageModel } from '@entities/pop-up-message'
import React from 'react'
import styled from 'styled-components'
import { Message } from './ui'

const PopUpMessages = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    width: 300px;
    bottom: 20px;
    right: 20px;
    z-index: 10;
`

const PopUpMessage = () => {
    const { popUps } = popUpMessageModel.selectors.usePopUpMessage()
    return (
        <PopUpMessages>
            {popUps.reverse().map((popUp) => {
                return <Message popUp={popUp} key={popUp.id} />
            })}
        </PopUpMessages>
    )
}

export default PopUpMessage
