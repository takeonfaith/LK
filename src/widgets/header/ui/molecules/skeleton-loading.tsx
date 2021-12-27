import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const SkeletonLoadingWrapper = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
`

const SkeletonLoading = () => {
    return (
        <SkeletonLoadingWrapper>
            <SkeletonShape
                shape={'circle'}
                size={{
                    width: '30px',
                    height: '30px',
                }}
                margin="0 5px"
            />
        </SkeletonLoadingWrapper>
    )
}

export default SkeletonLoading
