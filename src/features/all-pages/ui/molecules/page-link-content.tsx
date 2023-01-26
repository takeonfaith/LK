import React from 'react'
import { Colors, IColors } from '@consts'
import { settingsModel } from '@entities/settings'
import addPageToHome from '@features/all-pages/lib/add-page-to-home'
import deletePageFromHome from '@features/all-pages/lib/delete-page-from-home'
import LinkMoreButton from '@features/link-more-button'
import BlockWrapper from '@ui/block/styles'
import { Button } from '@ui/button'
import Notification from '@ui/notification'
import getCorrectWordForm from '@utils/get-correct-word-form'
import getShortStirng from '@utils/get-short-string'
import { useMemo } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import Icon from '../atoms/icon'
import { PageLinkProps } from './page-link'

export const PageLinkWrapper = styled(BlockWrapper)<{ color: string; isVertical: boolean; hasNotifications: boolean }>`
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: var(--brLight);

    .new {
        position: absolute;
        top: ${({ isVertical }) => (isVertical ? '5px' : '18px')};
        right: ${({ isVertical }) => (isVertical ? '-5px' : '50px')};
        border-radius: ${({ isVertical }) =>
            isVertical
                ? 'var(--brLight) calc(var(--brLight) - 4px) calc(var(--brLight) - 4px) var(--brLight)'
                : 'var(--brLight)'};
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
        border-radius: var(--brLight);
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
                opacity: ${({ hasNotifications }) => hasNotifications && 0};
                transform: ${({ isVertical }) => isVertical && 'scale(0.95) translateY(40%)'};
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
            text-align: ${({ isVertical }) => (isVertical ? 'center' : 'left')};
            color: var(--text);
            transition: 0.2s;
            height: 30px;
        }
    }
`

const PageLinkContent = (props: PageLinkProps & { maxWordLength: number }) => {
    const {
        color,
        shadow,
        notifications,
        maxWordLength,
        title,
        isNew,
        icon,
        mode,
        id,
        background,
        orientation = 'vertical',
    } = props

    const isVertical = orientation === 'vertical'
    const { settings } = settingsModel.selectors.useSettings()
    const isAdded = !!(settings['settings-home-page'].property.pages as string[])?.find((el) => el === id)

    const maxFirstWordLength = 13

    const getHyphenatedTitle = useMemo(
        () => (title: string, maxLength: number) => {
            const firstWord = title.split(' ')[0]

            return firstWord.length > maxLength && firstWord.length !== maxLength + 1 && isVertical
                ? `${title.substr(0, maxLength)}-${title.substr(maxLength, title.length)}`
                : title
        },
        [],
    )

    return (
        <PageLinkWrapper
            padding="0"
            width={'100%'}
            maxWidth={'100%'}
            height={isVertical ? '135px' : '60px'}
            isVertical={isVertical}
            justifyContent="center"
            shadow={shadow}
            color={color.length ? color : 'blue'}
            hasNotifications={!!notifications}
            background={background}
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
                <Icon color={color.length ? color : 'blue'}>{icon ?? <FiPlus />}</Icon>
                <b>{getShortStirng(getHyphenatedTitle(title, maxFirstWordLength), maxWordLength)}</b>
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
            {mode === 'use' && <LinkMoreButton route={props} />}
            {mode === 'add' ? (
                isAdded ? (
                    <Button
                        icon={<FiX />}
                        width="80px"
                        align="center"
                        textColor="var(--red)"
                        background="var(--schedule)"
                        onClick={() => deletePageFromHome(id, settings)}
                    />
                ) : (
                    <Button
                        icon={<FiPlus />}
                        //  onClick={() => open(<WhatsNew />)}
                        width="80px"
                        textColor="var(--green)"
                        align="center"
                        background="var(--schedule)"
                        onClick={() => addPageToHome(id, settings)}
                    />
                )
            ) : null}
            {isNew && <span className="new">New</span>}
        </PageLinkWrapper>
    )
}

export default PageLinkContent
