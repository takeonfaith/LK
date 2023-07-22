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

    if (!!error)
        return (
            <InitialLoaderWrapper loading={true} color={color}>
                <Error text="Нет подключения к интернету">
                    <Button onClick={loadUser} text="Попробовать снова" icon={<AiOutlineReload />} />
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
