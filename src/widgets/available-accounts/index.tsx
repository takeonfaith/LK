import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import Subtext from '@shared/ui/subtext'
import { Size } from '@shared/ui/types'
import List from '@ui/list'
import React from 'react'
import { useModal, User } from 'widgets'
import { UserList } from 'widgets/user-big/ui'

type Props = {
    padding?: string
    size?: Size
}

const AvailableAccounts = ({ padding, size = 'middle' }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()
    const isAdmin = false

    const onAdd = () => {
        open(<UserList />)
        contextMenuModel.events.close()
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
                        size={size}
                        name={account.fio ?? user.fullName}
                        token={account.token}
                        division={account.work_place}
                        group={account.group}
                        degreeLevel={account.degreeLevel}
                        orientation="vertical"
                    />
                )
            })}
        </List>
    )
}

export default AvailableAccounts
