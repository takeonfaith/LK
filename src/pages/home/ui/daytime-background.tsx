/* eslint-disable @typescript-eslint/no-unused-vars */
import { userModel } from '@entities/user'
import { Colors } from '@shared/consts'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import React from 'react'
import styled from 'styled-components'

const HomePageHeaderBackground = styled.div<{ color1: string; color2: string }>`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: ${({ color1, color2 }) => `linear-gradient(0deg, ${color1}, ${color2})`};
    overflow: hidden;

    & > *:nth-child(1) {
        transform: scale(1);
        z-index: 3;
    }
    & > *:nth-child(2) {
        transform: scale(2);
        z-index: 2;
    }
    & > *:nth-child(3) {
        transform: scale(3);
        z-index: 1;
    }
`

const DaytimeBackground = () => {
    //  const { color1, color2, color3 } = getDaytimeColors()
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <UserHeaderBackground
            fullName={user?.fullName ?? ''}
            width="calc(100% + 16px)"
            height="215px"
            baseScale={1.4}
            baseScaleDelta={1}
        />
    )
}

export default DaytimeBackground
