import styled from 'styled-components'
import LoadingImage from '../../images/loading.gif'
import React, { HtmlHTMLAttributes } from 'react'

type BaseProps = HtmlHTMLAttributes<HTMLImageElement>

type LoadingProps = BaseProps & {
    width?: string
    height?: string
}

const LoadingStyled = styled.img`
    width: 40px;
`

export function Loading(props: LoadingProps) {
    return <LoadingStyled {...props} src={LoadingImage} alt="loading" className="loading-circle" />
}
