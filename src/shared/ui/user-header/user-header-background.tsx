import getLettersColors from '@shared/lib/get-letters-colors'
import React from 'react'
import styled from 'styled-components'

export const BackgroundPlate = styled.div<{
    color: string
    color2: string
    width?: string
    height?: string
    baseScale: number
    baseScaleDelta: number
}>`
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100px'};
    position: absolute;
    background: ${({ color }) => color};
    z-index: -1;
    overflow: hidden;
    top: -16px;
    left: -16px;

    img {
        width: calc(100% + 200px);
        position: absolute;
        top: -100px;
        left: -100px;
        filter: blur(20px) brightness(0.7);
    }

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(50%);
        filter: drop-shadow(0 0 34px #00000054);
    }

    & svg:nth-child(1) {
        z-index: -3;
        transform: ${({ baseScaleDelta }) => `scale(${1 + baseScaleDelta * 2})`};
    }

    & svg:nth-child(2) {
        z-index: -2;
        transform: ${({ baseScaleDelta }) => `scale(${1 + baseScaleDelta})`};
    }

    & svg:nth-child(3) {
        z-index: -1;
        transform: ${({ baseScale }) => `scale(${baseScale})`};
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #00000024, transparent);
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
    }
`

type Props = {
    fullName: string
    width?: string
    height?: string
    avatar: string | undefined
    baseScale?: number
    baseScaleDelta?: number
}

const UserHeaderBackground = ({ fullName, avatar, width, height, baseScale = 1, baseScaleDelta = 1 }: Props) => {
    return (
        <BackgroundPlate
            width={width}
            height={height}
            color={getLettersColors(fullName, 'dark2')}
            color2={getLettersColors(fullName, 'light1')}
            baseScale={baseScale}
            baseScaleDelta={baseScaleDelta}
        >
            {avatar && <img src={avatar} />}
            {!avatar && (
                <>
                    <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                            fill={getLettersColors(fullName, 'dark1')}
                        />
                    </svg>
                    <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                            fill={getLettersColors(fullName, 'main')}
                        />
                    </svg>
                    <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                            fill={getLettersColors(fullName, 'light1')}
                        />
                    </svg>
                </>
            )}
        </BackgroundPlate>
    )
}
export default UserHeaderBackground
