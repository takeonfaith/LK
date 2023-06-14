import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router'

// Watches history stack locally, always has at least one path on stack
const useHistoryStack = () => {
    const { pathname } = useLocation()
    const [stack, setStack] = useState<string[]>([pathname])
    const { action } = useHistory()

    useEffect(() => {
        switch (action) {
            case 'POP':
                setStack(stack.length > 1 ? stack.slice(0, stack.length - 1) : stack)
                break
            case 'PUSH':
                setStack([...stack, pathname])
                break
            case 'REPLACE':
                setStack([...stack.slice(0, stack.length - 1), pathname])
        }
    }, [pathname, action])

    return stack
}

export default useHistoryStack
