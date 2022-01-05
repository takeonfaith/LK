import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const PlaceModalWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin: 10px 0 10px 0;
`

interface Props {
    place: string
    link: string | null
}

const PlaceModal = ({ place, link }: Props) => {
    return (
        <PlaceModalWrapper>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '100%',
                }}
                margin="0"
            />
        </PlaceModalWrapper>
    )
}

export default PlaceModal
