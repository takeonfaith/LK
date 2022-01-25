import React from 'react'
import styled from 'styled-components'
import { BasicBlock } from '../atoms'

const LeftBlockWrapper = styled(BasicBlock)`
    width: calc(100% - 5px);
    max-width: 800px;

    @media (max-width: 1225px) {
        width: 100%;
        max-width: 600px;
    }

    @media (max-width: 1000px) {
        width: 100%;
        /* max-width: 100%; */
    }
`

interface Props {
    children: React.ReactNode | string | null
    restProps?: any
}

const LeftBlock = ({ children, restProps }: Props) => {
    return <LeftBlockWrapper {...restProps}>{children}</LeftBlockWrapper>
}

export default LeftBlock
