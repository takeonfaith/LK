import React from 'react'
import { ColumnDivider } from './atoms/ColumnDivider'
import Flex from '@shared/ui/flex'

type Props = {
    title: string
    content: { [key: string]: string }
}

export const ScheduleTable = ({ title, content }: Props) => {
    return (
        <>
            <p>{title}</p>
            <Flex>
                <div>
                    {Object.keys(content).map((key) => (
                        <p key={key}>{key}</p>
                    ))}
                </div>
                <ColumnDivider />
                <div>
                    {Object.keys(content).map((key) => (
                        <p key={key}>{content[key]}</p>
                    ))}
                </div>
            </Flex>
        </>
    )
}
