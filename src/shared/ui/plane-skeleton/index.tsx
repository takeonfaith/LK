import React from 'react'
import Flex from '../flex'
import { SkeletonShape } from '../skeleton-shape'

const PlaneSkeleton = () => {
    return (
        <Flex gap="8px" ai="center">
            <SkeletonShape shape="circle" size={{ width: '40px', height: '40px' }} margin="0" />
            <Flex gap="6px" d="column" ai="flex-start" jc="center" h="100%">
                <SkeletonShape shape="rect" size={{ width: '300px', height: '13px' }} margin="0" />
                <SkeletonShape shape="rect" size={{ width: '220px', height: '10px' }} margin="0" />
            </Flex>
        </Flex>
    )
}

export default PlaneSkeleton
