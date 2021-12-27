import React from 'react'
import styled from 'styled-components'

const DividerLine = styled.div`
    width: 90%;
    height: 0.5px;
    background: var(--almostTransparentOpposite);
    margin: 5px auto;
`

const Divider = () => {
    return <DividerLine />
}

export default Divider
