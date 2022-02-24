import React from 'react'
import styled from 'styled-components'
import { BasicBlock } from '..'

interface Props {
    children: React.ReactNode | string | null
    restProps?: any
}

const AgreementsContainer = styled(BasicBlock)`
    width: 100%;
    height: 100%;
    max-width: 1190px;

    @media (max-width: 1225px) {
        width: 100%;
        max-width: 600px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        /* max-width: 100%; */
    }
`

const AggreementsBlock = ({ children, restProps }: Props) => {
    return <AgreementsContainer {...restProps}>{children}</AgreementsContainer>
}

export default AggreementsBlock
