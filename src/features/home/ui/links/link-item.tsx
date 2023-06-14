import { IRoute } from '@app/routes/general-routes'
import { Icon } from '@features/all-pages'
import { Colors } from '@shared/consts'
import getShortStirng from '@shared/lib/get-short-string'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Notification from '@shared/ui/notification'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkItemStyled = styled(Link)<{ amount: number; color: string }>`
    width: 100%;
    height: 100%;
    /* background: var(--schedule); */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .subtext {
        white-space: nowrap;
        opacity: 0;
        transform: translateY(10px) translateX(-50%);
        position: absolute;
        left: 50%;
        bottom: 12px;
        font-size: 0.8rem;
        transition: 0.2s;
        color: var(--text);
    }

    @media (min-width: 1001px) {
        &:hover {
            background-color: ${({ color }) => color};
        }

        &:hover .subtext {
            opacity: 1;
            transform: translateY(0px) translateX(-50%);
        }

        &:hover .icon {
            transform: scale(0.8) translateY(-10px);
        }
    }

    &:active .icon {
        transform: scale(0.7);
    }

    &:active .subtext {
        transform: scale(0.9) translateY(0px) translateX(-50%);
        transform-origin: left top;
    }

    &:hover .notification-circle {
        opacity: 0;
    }

    @media (max-width: 1000px) {
        min-width: calc(25% - 10px);
        max-width: calc(25% - 10px);
        height: 50px;
    }
`

// const HiddenTitle = styled.span`

// `

type Props = {
    item: IRoute
    amount: number
}

const LinkItem = ({ item, amount }: Props) => {
    const { icon, color, path, title, notifications } = item
    const { isMobile } = useCurrentDevice()
    return (
        <LinkItemStyled amount={amount} to={path} color={Colors[color].transparent3}>
            <Notification
                outline="4px solid var(--schedule)"
                color="red"
                top={isMobile ? '80%' : '66%'}
                left={isMobile ? '70%' : '66%'}
                visible={!!notifications}
                className="notification-circle"
            >
                {notifications}
            </Notification>
            <Icon color={color}>{icon}</Icon>
            <Subtext className="subtext" align="center">
                {getShortStirng(title, 10)}
            </Subtext>
        </LinkItemStyled>
    )
}

export default LinkItem
