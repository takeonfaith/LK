import React from 'react'
import Flex from '../flex'
import { SkeletonShape } from '../skeleton-shape'
import { Shape } from '../types'

type Props = {
    quantity?: number
    avatarShape?: Shape
}

const PlaneSkeletonList = ({ quantity = 1, avatarShape = 'circle' }: Props) => {
    return (
        <Flex d="column" gap="20px">
            {Array(quantity)
                .fill(0)
                .map((_, i) => (
                    <Flex gap="16px" ai="center" key={i}>
                        <SkeletonShape shape={avatarShape} size={{ width: '40px', height: '40px' }} margin="0" />
                        <Flex gap="8px" d="column" ai="flex-start" jc="center" h="100%">
                            <SkeletonShape shape="rect" size={{ width: '90%', height: '13px' }} margin="0" />
                            <SkeletonShape shape="rect" size={{ width: '70%', height: '10px' }} margin="0" />
                        </Flex>
                    </Flex>
                ))}
        </Flex>
    )
}

export default PlaneSkeletonList
