import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import List from '@ui/list'
import React from 'react'
import { useModal, User } from 'widgets'
import { UserList } from 'widgets/user-big/ui'

const AvailableAccounts = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    return (
        <List
            visible={!!user?.available_accounts}
            padding="0px"
            title="Аккаунты"
            direction="horizontal"
            gap={0}
            showPages
            horizontalAlign="left"
            onAdd={() => {
                open(<UserList />)
                contextMenuModel.events.close()
            }}
        >
            {user?.available_accounts?.map((account) => {
                return (
                    <User
                        key={account.name}
                        type={'teacher'}
                        onClick={() => {
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
                        }}
                        size="small"
                        name={account.name}
                        orientation="vertical"
                    />
                )
            })}
        </List>
    )
}

export default AvailableAccounts
