import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const SkeletonLoadingWrapper = styled.div`
    width: 100%;
    background: var(--schedule);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;

    .horizontal {
        display: flex;
        align-items: center;
    }
`

const SkeletonLoading = () => {
    return (
        <SkeletonLoadingWrapper>
            <div className="horizontal">
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '86px',
                        height: '20px',
                    }}
                    margin="0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '60px',
                        height: '14px',
                    }}
                    margin="0 5px"
                />
            </div>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '200px',
                    height: '17px',
                }}
                margin="16px 0"
            />
            <div className="horizontal">
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '120px',
                        height: '13px',
                    }}
                    margin="0"
                />
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '120px',
                        height: '13px',
                    }}
                    margin="0 10px"
                />
            </div>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '80px',
                    height: '12px',
                }}
                margin="5px 0"
            />
        </SkeletonLoadingWrapper>
    )
}

export default SkeletonLoading
