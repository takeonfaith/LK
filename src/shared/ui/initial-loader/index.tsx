import React from 'react'
import { userModel } from '@entities/user'
import { Error } from '@ui/error'
import { Loading } from '@ui/loading'
import { Logo } from '@ui/logo'
import { Button } from '@ui/button'
import { AiOutlineReload } from 'react-icons/ai'
import { UserToken } from '@api/model'
import { InitialLoaderWrapper } from './styles'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Colors } from '@shared/consts'
import Flex from '../flex'

interface Props {
    loading: boolean
}

const InitialLoader = ({ loading }: Props) => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const color = user ? getLettersColors(user?.fullName) : Colors.blue.main

    const loadUser = () => userModel.effects.getUserFx(JSON.parse(localStorage.getItem('token') ?? '') as UserToken)

    const handleLogout = () => userModel.events.logout()

    if (!!error)
        return (
            <InitialLoaderWrapper loading={true} color={color}>
                <Error text={error}>
                    <Flex d="column" gap="8px">
                        <Button onClick={loadUser} text="Попробовать снова" icon={<AiOutlineReload />} width="200px" />
                        <Button
                            onClick={handleLogout}
                            textColor="var(--theme-mild-opposite)"
                            text="Выйти"
                            width="200px"
                            background="var(--theme)"
                        />
                    </Flex>
                </Error>
            </InitialLoaderWrapper>
        )

    return (
        <InitialLoaderWrapper color={color} loading={loading}>
            <Logo short width="100px" />
            {loading && <Loading />}
        </InitialLoaderWrapper>
    )
}

export default InitialLoader
