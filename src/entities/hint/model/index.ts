import { Coordinates } from '@ui/types'
import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector'

export interface Hint {
    isOpen: boolean
    message: string | null
    position: Coordinates
}

interface HintStore {
    hints: Hint[]
}

const getDefaultHintValue = (message: string, isFirst: boolean, position: Coordinates): Hint => ({
    isOpen: isFirst,
    message,
    position: position,
})

const DEFAULT_STORE: HintStore = {
    hints: [],
}

const useHint = () => {
    return useStore($hint)
}

const evoke = createEvent<{ message: string; position: Coordinates }>()

const close = createEvent()
const clearStore = createEvent()

const $hint = createStore<HintStore>(DEFAULT_STORE)
    .on(evoke, (oldState, { message, position }) => ({
        hints: [...oldState.hints, getDefaultHintValue(message, oldState.hints.length === 0, position)],
    }))
    .on(close, (oldState) => ({
        hints: oldState.hints.splice(1, oldState.hints.length),
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useHint,
}

export const events = {
    evoke,
    close,
    clearStore,
}
