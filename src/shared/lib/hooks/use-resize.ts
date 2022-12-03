import { useEffect, useState } from 'react'

const useResize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 })

    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', () => handleResize())

        return () => {
            window.removeEventListener('resize', () => handleResize())
        }
    }, [])

    return size
}

export default useResize
