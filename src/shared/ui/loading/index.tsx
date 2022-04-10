import React, { HtmlHTMLAttributes } from 'react'

type BaseProps = HtmlHTMLAttributes<HTMLImageElement>

type LoadingProps = BaseProps & {
    width?: string
    height?: string
}

export function Loading(props: LoadingProps) {
    return (
        <img
            {...props}
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif"
            alt="loading"
            className="loading-circle"
        />
    )
}
