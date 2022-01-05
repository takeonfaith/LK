import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const SkeletonLoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    .name-and-status {
        display: flex;
        flex-direction: column;
    }
`

const SkeletonLoading = () => {
    return (
        <SkeletonLoadingWrapper>
            <SkeletonShape
                shape={'circle'}
                size={{
                    width: '30px',
                    height: '',
                }}
                margin="8px 0px 8px 0 "
            />
            <div className="name-and-status">
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '130px',
                        height: '10px',
                    }}
                    margin="1px 10px"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '70px',
                        height: '8px',
                    }}
                    margin="0px 10px"
                />
            </div>
        </SkeletonLoadingWrapper>
    )
}

export default SkeletonLoading
