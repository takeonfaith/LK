import React from 'react'
import styled from 'styled-components'

const DividerLine = styled.span`
    width: 90%;
    height: 1px;
    background: var(--almostTransparentOpposite);
    margin: 10px auto;
`

const Divider = () => {
    return <DividerLine />
}

export default Divider
