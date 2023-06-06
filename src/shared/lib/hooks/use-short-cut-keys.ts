/* eslint-disable no-console */
import { useEffect } from 'react'

const keys_pressed = new Set()

const useShortCutKeys = (keys: string[], onPressed: () => void) => {
    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            keys_pressed.add(event.key)
            const sliced = keys.slice(0, keys.length - 1)

            if (!sliced.find((k) => !keys_pressed.has(k)) && keys[keys.length - 1] === event.key) {
                onPressed()
            }
        })

        window.addEventListener('keyup', (event) => {
            keys_pressed.delete(event.key)
        })
    }, [])
}

export default useShortCutKeys
