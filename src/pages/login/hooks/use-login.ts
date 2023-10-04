import { userModel } from '@entities/user'
import useQueryParams from '@utils/hooks/use-query-params'
import { useEffect, useState } from 'react'

const useLogin = () => {
    const queryParams = useQueryParams()
    const queryLogin = queryParams.get('login')
    const queryPassword = queryParams.get('password')

    const [login, setLogin] = useState(queryLogin ?? '')
    const [password, setPassword] = useState(queryPassword ?? '')
    const [capsLock, setCapsLock] = useState(false)
    const isSubmitActive = !!password && !!login
    const loginFunc = userModel.events.login
    const showAbiturientMessage = new Date().getMonth() >= 6 && new Date().getMonth() <= 8

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        setCapsLock(e.getModifierState('CapsLock'))

        if (e.key === 'Enter') {
            loginFunc({ login, password })
        }
    }

    const handleSavePassword = (value: boolean) => {
        userModel.events.changeSavePassword({ savePassword: value })
    }

    const handleLogin = () => loginFunc({ login, password })

    useEffect(() => {
        queryLogin && queryPassword && loginFunc({ login: queryLogin, password: queryPassword })
    }, [queryLogin, queryPassword])

    return {
        isSubmitActive,
        password,
        capsLock,
        login,
        showAbiturientMessage,
        handleSavePassword,
        handleKeyPress,
        handleLogin,
        setPassword,
        setLogin,
    }
}

export default useLogin
