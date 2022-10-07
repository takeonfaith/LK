import { createEvent, createStore } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { StoryProps } from '@ui/story/ui/story-page'

export interface IStory {
    isOpen: boolean
    pages: StoryProps[]
    currentPage: number
}

const DEFAULT_STORE: IStory = {
    isOpen: false,
    pages: [],
    currentPage: 0,
}

const useStory = () => {
    return useStore($story)
}

const open = createEvent<{ pages: StoryProps[] }>()

const close = createEvent()
const changeCurrentPage = createEvent<{ value: number }>()
const clearStore = createEvent()

const $story = createStore<IStory>(DEFAULT_STORE)
    .on(open, (_, { pages }) => ({
        isOpen: true,
        pages,
        currentPage: 0,
    }))
    .on(close, (oldState) => ({
        pages: oldState.pages,
        currentPage: oldState.currentPage,
        isOpen: false,
    }))
    .on(changeCurrentPage, (oldData, { value }) => ({
        ...oldData,
        currentPage: value,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useStory,
}

export const events = {
    open,
    close,
    clearStore,
    changeCurrentPage,
}
