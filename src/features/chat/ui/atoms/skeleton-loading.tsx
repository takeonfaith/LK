import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const SkeletonLoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;

    .name-and-message {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const SkeletonLoading = () => {
    return (
        <SkeletonLoadingWrapper>
            <SkeletonShape
                shape={'circle'}
                size={{
                    width: '40px',
                    height: '40px',
                }}
                margin="0 7px 0 0"
            />
            <div className="name-and-message">
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '150px',
                        height: '12px',
                    }}
                    margin="2px 0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '70px',
                        height: '10px',
                    }}
                    margin="0"
                />
            </div>
        </SkeletonLoadingWrapper>
    )
}

export default SkeletonLoading
