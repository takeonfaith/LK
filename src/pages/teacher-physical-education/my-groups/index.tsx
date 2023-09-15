import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { $myGroups, Group, load } from './model'

export function MyGroups() {
    const [groups] = useUnit([$myGroups])

    useEffect(() => {
        load()
    }, [])

    return <Table data={groups} columns={columns} />
}

const columns = [
    { field: 'groupName', title: 'Группа' },
    {
        field: 'curator',
        title: 'Преподаватель',
        render: (curator: Group['curator']) => {
            return curator.fullName
        },
    },
]
