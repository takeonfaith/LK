import { signalRConnection } from '@api/config'
import { createEffect, createStore, forward, sample } from 'effector'
import { appInit } from './app-init'

export const initSignalRFx = createEffect(async () => {
    await signalRConnection.start()
})

export const $signalRInitiated = createStore<boolean>(false)

sample({ clock: initSignalRFx.doneData, fn: () => true, target: $signalRInitiated })

forward({ from: appInit, to: initSignalRFx })
