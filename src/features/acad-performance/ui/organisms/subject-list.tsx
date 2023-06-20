import { AcadPerformance } from '@api/model/acad-performance'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React, { memo } from 'react'
import SubjectItems from '../molecules/subject-items'

type Props = {
    header: string
    loading?: boolean
    items?: AcadPerformance[]
    type?: 'exam' | 'test'
}

const SubjectList = ({ header, items, loading, type = 'exam' }: Props) => {
    return (
        <Flex d="column">
            {!!items?.length && (
                <Title size={3} align="left" width="fit-content">
                    {header}
                    <Subtext>{items.length}</Subtext>
                </Title>
            )}
            <SubjectItems items={items || []} type={type} loading={loading} />
        </Flex>
    )
}

export default memo(SubjectList)
