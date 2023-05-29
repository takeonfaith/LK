import { LocalStorageKey } from '@shared/constants/local-storage'

const useShowTutorial = () => {
    const seen = JSON.parse(localStorage.getItem(LocalStorageKey.Tutorial) ?? 'false') as boolean

    const setSeen = (value: boolean) => {
        localStorage.setItem(LocalStorageKey.Tutorial, value.toString())
    }

    return { seen, setSeen }
}

export default useShowTutorial
