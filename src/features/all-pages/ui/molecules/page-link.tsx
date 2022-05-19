import { Colors, IColors } from '@consts'
import { contextMenuModel } from '@entities/context-menu'
import BlockWrapper from '@ui/block/styles'
import { Button } from '@ui/button'
import getShortStirng from '@utils/get-short-string'
import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import styled from 'styled-components'
import ContextContent from './context-content'
import Icon from '../atoms/icon'
import { Link } from 'react-router-dom'
import { menuModel } from '@entities/menu'
import { IRoute } from '@app/routes/general-routes'
import Notification from '@ui/notification'
import getCorrectWordForm from '@utils/get-correct-word-form'
import { Direction } from '@ui/types'

const LinkWrapper = styled(Link)<{ width: number | string }>`
    width: ${({ width }) => (typeof width === 'number' ? `calc(125px * ${width} + ${(width - 1) * 10}px)` : width)};

    @media (max-width: 500px) {
        max-width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
        min-width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
        width: ${({ width }) => (typeof width === 'number' ? `calc(33vw * ${width} - 14px)` : width)};
    }
`

export const PageLinkWrapper = styled(BlockWrapper)<{ color: string; isVertical: boolean }>`
    position: relative;
    cursor: pointer;
    text-decoration: none;

    .new {
        position: absolute;
        top: 5px;
        right: -5px;
        border-radius: var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight);
        background: ${Colors.red.lighter};
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        padding: 5px 10px;
        /* box-shadow: 0 0 60px ${Colors.red.lighter}; */
    }

    .more-button {
        position: absolute;
        top: ${({ isVertical }) => (isVertical ? '5px' : '50%')};
        left: ${({ isVertical }) => (isVertical ? '5px' : 'auto')};
        right: ${({ isVertical }) => !isVertical && '10px'};
        transform: ${({ isVertical }) => !isVertical && 'translateY(-50%)'};
        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }

    &:hover {
        .more-button {
            opacity: 1;
            visibility: visible;
        }
        .notification-circle {
            opacity: 0;
        }
    }

    .outside {
        width: 100%;
        height: 100%;
        overflow: hidden;
        gap: 15px;
        display: flex;
        flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
        border-radius: var(--brSemi);
        align-items: center;
        justify-content: ${({ isVertical }) => (isVertical ? 'center' : 'flex-start')};
        padding: 15px;

        .notifications-title {
            opacity: 0;
            transform: translateY(20px);
            font-size: 0.7em;
            position: absolute;
            transition: 0.2s;
            bottom: 25px;
            font-weight: bold;
            color: #fff;
        }

        &:hover {
            .icon {
                box-shadow: 0 20px 110px 60px ${({ color }) => Colors[color as keyof IColors].main};
                transform: ${({ isVertical }) => isVertical && 'scale(1.1) translateY(20px)'};
            }

            b {
                opacity: ${({ isVertical }) => isVertical && 0};
                transform: ${({ isVertical }) => isVertical && 'scale(0.95)'};
            }

            .notifications-title {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        b {
            display: flex;
            align-items: center;
            font-size: 0.8em;
            text-align: center;
            color: var(--text);
            transition: 0.2s;
            height: 30px;
        }
    }
`

type Props = IRoute & { orientation?: Direction; shadow?: boolean; restricted?: boolean }

const PageLink = (props: Props) => {
    const {
        icon,
        title,
        color,
        path,
        notifications,
        isNew,
        orientation = 'vertical',
        shadow = true,
        restricted = false,
    } = props
    const isVertical = orientation === 'vertical'
    const maxWordLenght = restricted ? 20 : 50
    const linkWidth = title.length > 23 && !restricted ? 2 : 1
    return (
        <LinkWrapper
            to={path}
            onClick={() => {
                menuModel.events.changeOpen({ isOpen: false, currentPage: path.slice(1, path.length) })
            }}
            width={isVertical ? linkWidth : '100%'}
        >
            <PageLinkWrapper
                padding="0"
                width={'100%'}
                maxWidth={'100%'}
                height={isVertical ? '135px' : '60px'}
                isVertical={isVertical}
                justifyContent="center"
                shadow={shadow}
                color={color.length ? color : 'blue'}
            >
                <Notification
                    outline="4px solid var(--schedule)"
                    color="red"
                    top={isVertical ? '60px' : '75%'}
                    left={orientation !== 'vertical' ? '50px' : 'auto'}
                    right={isVertical ? '32px' : 'auto'}
                    visible={!!notifications}
                    className="notification-circle"
                >
                    {notifications}
                </Notification>
                <div className="outside">
                    <Icon color={color.length ? color : 'blue'}>{icon}</Icon>
                    <b>{getShortStirng(title, maxWordLenght)}</b>
                    {notifications && (
                        <span className="notifications-title">
                            {notifications}{' '}
                            {getCorrectWordForm(notifications, {
                                one: 'уведомление',
                                zero: 'уведомлений',
                                twoToFour: 'уведомления',
                                fiveToNine: 'уведомлений',
                            })}
                        </span>
                    )}
                </div>
                <Button
                    icon={<FiMoreVertical />}
                    textColor={Colors[(color.length ? color : 'blue') as keyof IColors].main}
                    className="more-button"
                    background="transparent"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        contextMenuModel.events.open({
                            e,
                            height: 143,
                            content: <ContextContent {...props} />,
                        })
                    }}
                />
                {isNew && <span className="new">New</span>}
            </PageLinkWrapper>
        </LinkWrapper>
    )
}

export default PageLink
