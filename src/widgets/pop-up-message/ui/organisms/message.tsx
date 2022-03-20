import { popUpMessageModel } from '@entities/pop-up-message'
import { IPopUpMessage } from '@entities/pop-up-message/model'
import { Button } from '@ui/atoms'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { MessageWrapper, Progress } from '../atoms'

interface Props {
    popUp: IPopUpMessage
}

const deletePopUp = (index: number) => {
    setTimeout(() => {
        popUpMessageModel.events.removePopUp({ index })
    }, 400)
}

const closePopUp = (index: number) => {
    popUpMessageModel.events.openPopUpMessage({ isOpen: false, index })
    deletePopUp(index)
}

const Message = ({ popUp }: Props) => {
    const time = useMemo(() => (popUp.time * (popUp.id + 1)) / 2, [])
    const ref = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(50)

    useEffect(() => {
        const timer = setTimeout(() => {
            closePopUp(popUp.id)
        }, time)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight + 10)
        }
    }, [ref])

    const handleOnClick = useCallback(() => {
        const click = popUp.onClick
        if (!!click) {
            click()
            popUpMessageModel.events.openPopUpMessage({ isOpen: !popUp.isOpen, index: popUp.id })
        }
    }, [])

    return (
        <MessageWrapper
            isOpen={popUp.isOpen}
            isClickable={!!popUp.onClick}
            color={popUp.type === 'success' ? 'green' : popUp.type === 'info' ? 'darkBlue' : 'red'}
            onClick={handleOnClick}
            key={popUp.id}
            position={popUp.id}
            ref={ref}
            height={height}
        >
            <Progress
                time={time}
                color={popUp.type === 'success' ? 'green' : popUp.type === 'info' ? 'darkBlue' : 'red'}
            />
            <Button onClick={() => closePopUp(popUp.id)} icon={<FiX />} />
            {popUp.message}
        </MessageWrapper>
    )
}

export default Message
