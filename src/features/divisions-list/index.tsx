import Flex from '@shared/ui/flex'
import React from 'react'
import DivisionItem from './division-item'

type Props = {
    divisions: string[] | null
}

const DivisionsList = ({ divisions }: Props) => {
    if (!divisions || divisions.length === 0) return null

    return (
        <Flex d="column" gap="4px" ai="flex-start">
            {divisions.map((division) => (
                <DivisionItem division={division} key={division} />
            ))}
        </Flex>
    )
}

export default DivisionsList
