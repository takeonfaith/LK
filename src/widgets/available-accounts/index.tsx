import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { GeneralAccount } from '@shared/api/model'
import Subtext from '@shared/ui/subtext'
import List from '@ui/list'
import React from 'react'
import { useModal, User } from 'widgets'
import { UserList } from 'widgets/user-big/ui'

type Props = {
    padding?: string
}

const AvailableAccounts = ({ padding }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isAdmin = false

    const onAdd = () => {
        open(<UserList />)
        contextMenuModel.events.close()
    }

    const handleChangeAccount = (account: GeneralAccount) => {
        return () => {
            confirmModel.events.evokeConfirm({
                message: 'Вы уверены, что хотите сменить аккаунт?',
                onConfirm: () => {
                    localStorage.setItem(
                        'token',
                        JSON.stringify({
                            token: account.token,
                        }),
                    )
                    location.reload()
                },
            })
            contextMenuModel.events.close()
        }
    }

    return (
        <List
            visible={!!user?.accounts}
            padding={padding}
            title="Аккаунты"
            direction="horizontal"
            gap={0}
            showPages
            horizontalAlign="left"
            onAdd={isAdmin ? onAdd : undefined}
        >
            {!user?.accounts?.length && <Subtext>Нет доступных аккаунтов</Subtext>}
            {user?.accounts?.map((account) => {
                return (
                    <User
                        key={account.fio}
                        type={account.user_status}
                        onClick={handleChangeAccount(account)}
                        size="middle"
                        name={account.fio}
                        orientation="vertical"
                    />
                )
            })}
        </List>
    )
}

export default AvailableAccounts
