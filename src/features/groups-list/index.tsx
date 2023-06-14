import Flex from '@shared/ui/flex'
import React from 'react'
import GroupItem from './group-item'

type Props = {
    groups: string[] | null
}

const GroupsList = ({ groups }: Props) => {
    if (!groups) return null

    return (
        <Flex d="column" gap="4px" ai="flex-start">
            {groups.map((group) => (
                <GroupItem group={group} key={group} />
            ))}
        </Flex>
    )
}

export default GroupsList
