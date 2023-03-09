/* eslint-disable @typescript-eslint/no-unused-vars */
import { lkNotificationModel } from '@entities/lk-notifications'
import { useEffect, useRef, useState } from 'react'
import { DEFAULT_STATE_DURATION, OPEN_CLOSE_ANIMATION_DURATION } from '../consts'

const usePopUpNotifications = () => {
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const [closing, setClosing] = useState<string | null>(null)
    const timerRef = useRef<number | undefined>()

    const handleClose = (id: string) => {
        timerRef.current = undefined

        return () => {
            setClosing(id)
            setTimeout(() => {
                lkNotificationModel.events.clearById(id)
            }, OPEN_CLOSE_ANIMATION_DURATION)
        }
    }

    useEffect(() => {
        if (notifications.length && timerRef.current === undefined) {
            timerRef.current = setTimeout(
                handleClose(notifications[0]?.id),
                notifications[0]?.duration ?? DEFAULT_STATE_DURATION,
            )
        }
    }, [notifications])

    return {
        handleClose,
        closing,
    }
}

export default usePopUpNotifications
