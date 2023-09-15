import { SkeletonShape } from '@ui/skeleton-shape'
import React from 'react'
import styled from 'styled-components'
import BlockWrapper, { StyledProps } from './styles'

type Props = StyledProps &
    React.HTMLAttributes<HTMLDivElement> & {
        children: ChildrenType
        loading?: boolean
        skeleton?: ChildrenType
        background?: string
    }

const SkeletonWrapper = styled.div`
    width: 100%;
`

const DefaultSkeleton = () => {
    return (
        <SkeletonWrapper>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '50%',
                    height: '24px',
                }}
                margin="0 0 30px 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '90%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '90%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '80%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />

            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '45%',
                    height: '17px',
                }}
                margin="2rem 0 0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '40%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '60%',
                    height: '17px',
                }}
                margin="0.8rem 0"
            />
        </SkeletonWrapper>
    )
}

const Block = (props: Props) => {
    const { children, skeleton = <DefaultSkeleton />, loading = false, ...restProps } = props
    return (
        <BlockWrapper {...restProps} className="block">
            {!loading ? children : skeleton}
        </BlockWrapper>
    )
}

export default Block
