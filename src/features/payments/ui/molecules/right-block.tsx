import React from 'react'
import styled from 'styled-components'
import { BasicBlock } from '../atoms'

const RightBlockWrapper = styled(BasicBlock)`
    width: calc(100% - 5px);
    max-width: 380px;

    @media (max-width: 1225px) {
        width: 100%;
        max-width: 600px;
    }
`

interface Props {
    children: React.ReactNode | string | null
    restProps?: any
}

const RightBlock = ({ children, restProps }: Props) => {
    return <RightBlockWrapper {...restProps}>{children}</RightBlockWrapper>
}

export default RightBlock
