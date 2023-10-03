import { IRoute } from '@app/routes/general-routes'
import { Icon } from '@features/all-pages'
import { Colors, MEDIA_QUERIES } from '@shared/constants'
import getShortStirng from '@shared/lib/get-short-string'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkItemStyled = styled(Link)<{ amount: number; color: string }>`
    width: 100%;
    height: 100%;
    /* background: var(--block); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 10px;

    .subtext {
        white-space: nowrap;
        font-size: 0.72rem;
        transition: 0.2s;
        color: var(--text);
    }

    @media (min-width: 1001px) {
        &:hover {
            background-color: ${({ color }) => color};
        }

        &:hover .subtext {
            transform: translateX(0px) translateY(-50%);
            opacity: 0;
        }

        &:hover .icon {
            transform: scale(1.1) translateY(12px);
        }

        &:hover .notification-circle {
            opacity: 0;
        }
    }

    ${MEDIA_QUERIES.isTablet} {
        &:active .icon {
            transform: scale(1.1) translateY(6px);
        }

        &:active .subtext {
            transform: translateX(0px) translateY(-50%);
            opacity: 0;
        }

        &:active {
            background-color: ${({ color }) => color};
        }

        min-width: calc(25% - 10px);
        max-width: calc(25% - 10px);
        height: 50px;
        gap: 3px;

        .icon {
            transform: scale(0.8);
        }
        .subtext {
            font-size: 0.6rem;
        }
    }
`

// const HiddenTitle = styled.span`

// `

type Props = {
    item: IRoute
    amount: number
}

const LinkItem = ({ item, amount }: Props) => {
    const { icon, color, path, title, notifications, menuPath } = item
    return (
        <LinkItemStyled amount={amount} to={menuPath ?? path} color={Colors[color].transparent3}>
            <Icon badge={notifications?.toString()} color={color} size={35}>
                {icon}
            </Icon>
            <Subtext className="subtext" align="center">
                {getShortStirng(title, 10)}
            </Subtext>
        </LinkItemStyled>
    )
}

export default LinkItem
