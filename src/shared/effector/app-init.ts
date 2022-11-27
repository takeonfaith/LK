import { signalRConnection } from '@api/config'
import { createEffect, createEvent, sample } from 'effector'

export const appInit = createEvent()

const appInitFx = createEffect(async () => {
    await signalRConnection.start()
})

sample({ clock: appInit, target: appInitFx })
