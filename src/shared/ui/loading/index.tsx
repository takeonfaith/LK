import LoadingImage from '../../images/loading.gif'
import React, { HtmlHTMLAttributes } from 'react'

type BaseProps = HtmlHTMLAttributes<HTMLImageElement>

type LoadingProps = BaseProps & {
    width?: string
    height?: string
}

export function Loading(props: LoadingProps) {
    return <img {...props} src={LoadingImage} alt="loading" className="loading-circle" />
}
