/* eslint-disable @typescript-eslint/no-unused-vars */
import { lkNotificationModel } from '@entities/lk-notifications'
import { useEffect, useRef, useState } from 'react'
import { DEFAULT_STATE_DURATION, OPEN_CLOSE_ANIMATION_DURATION } from '../consts'

const usePopUpNotifications = () => {
    const { visibleNotifications } = lkNotificationModel.selectors.useLkNotifications()
    const [closing, setClosing] = useState<string | null>(null)
    const timerRef = useRef<number | undefined>()

    const handleClose = (id: string) => {
        timerRef.current = undefined

        return () => {
            setClosing(id)
            setTimeout(() => {
                lkNotificationModel.events.clearVisibleById(id)
            }, OPEN_CLOSE_ANIMATION_DURATION)
        }
    }

    useEffect(() => {
        if (visibleNotifications.length && timerRef.current === undefined) {
            timerRef.current = setTimeout(
                handleClose(visibleNotifications[0]?.id),
                visibleNotifications[0]?.duration ?? DEFAULT_STATE_DURATION,
            )
        }
    }, [visibleNotifications])

    return {
        handleClose,
        closing,
    }
}

export default usePopUpNotifications
