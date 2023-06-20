import { Image } from '@ui/atoms'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const QrCodeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 4px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        min-width: 100%;
    }
`

interface Props {
    qrCode: string
}

const QrCode = ({ qrCode }: Props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <QrCodeWrapper>
            <Image loading={loading} width={'300px'} height={'300px'} src={qrCode ?? ''} />
        </QrCodeWrapper>
    )
}

export default QrCode
