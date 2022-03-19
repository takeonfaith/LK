import React from 'react'
import { AnimatedCheckWrapper } from './styles'

export type AnimatedCheckProps = {
    size: string
}

export function AnimatedCheck({ size }: AnimatedCheckProps) {
    return (
        <AnimatedCheckWrapper size={size}>
            <div className="wrapper">
                <div className="circle-blue">
                    <div className="circle-white"></div>
                </div>
                <div className="circle-blue-shadow"></div>
                <svg className="check-svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <polyline className="check-poly" points="26 37 34 43 47 27" strokeLinecap="round" />
                </svg>
            </div>
        </AnimatedCheckWrapper>
    )
}
