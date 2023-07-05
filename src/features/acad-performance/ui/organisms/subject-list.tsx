import { PreparedAcadPerformanceData } from '@entities/acad-performance/lib/prepare'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React, { memo } from 'react'
import SubjectItems from '../molecules/subject-items'
import PlaneSkeletonList from '@shared/ui/plane-skeleton-list'
import { SkeletonShape } from '@shared/ui/skeleton-shape'

type Props = {
    loading?: boolean
    items: PreparedAcadPerformanceData | null
}

const SubjectList = ({ items, loading }: Props) => {
    if (!items) return null

    if (loading)
        return (
            <Flex d="column" ai="flex-start" gap="12px">
                <SkeletonShape shape="rect" size={{ width: '100px', height: '30px' }} />
                <PlaneSkeletonList quantity={5} avatarShape="rect" />
                <SkeletonShape shape="rect" size={{ width: '100px', height: '30px' }} />
                <PlaneSkeletonList quantity={10} avatarShape="rect" />
            </Flex>
        )

    return (
        <Flex d="column" gap="20px">
            {Object.keys(items)?.map((key) => {
                return (
                    <Flex d="column" key={key}>
                        <Title size={3} align="left" width="fit-content">
                            {key}
                            <Subtext>{items[key].length}</Subtext>
                        </Title>

                        <SubjectItems items={items[key] || []} type={key} loading={loading} />
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default memo(SubjectList)
