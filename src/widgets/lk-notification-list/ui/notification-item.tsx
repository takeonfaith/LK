import { TNotification, lkNotificationModel } from '@entities/lk-notifications'
import getShortString from '@shared/lib/get-short-string'
import localizeDate from '@shared/lib/dates/localize-date'
import AutoAccordion from '@shared/ui/auto-accordion'
import { Button } from '@shared/ui/button'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { ExtSize, Size } from '@shared/ui/types'
import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets/modal/lib'
import { iconObject } from './notification-icon'

const NotificationItemStyled = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: var(--brLight);
    color: var(--text);
    cursor: pointer;

    .left-icon {
        width: fit-content;
        margin-right: 12px;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .top-content {
            width: 100%;
            margin-top: 2px;
            display: flex;
            align-items: center;
        }
    }

    &:hover {
        background: var(--theme-mild-xxl);
    }
`

const NotificationTitle = styled.div<{ fontSize: string }>`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 500;
`

type SizeObject = Record<ExtSize, string>

const titleSize: SizeObject = {
    small: '0.8rem',
    middle: '0.83rem',
    large: '0.85rem',
    big: '0.86rem',
}

const textSize: SizeObject = {
    small: '0.75rem',
    middle: '0.78rem',
    large: '0.79rem',
    big: '0.80rem',
}

const gapSize: SizeObject = {
    small: '0px',
    middle: '1px',
    large: '2px',
    big: '3px',
}

const NotificationItem = ({
    id,
    title,
    text,
    time,
    date,
    onClick,
    type,
    pageId,
    goTo,
    onClose,
    bottomMargin,
    closeAnimation = true,
    loadingRemove = false,
    canClose = true,
    fullText = true,
    maxLetters = 200,
    size = 'middle',
}: TNotification & { size?: Size; maxLetters?: number; closeAnimation?: boolean; bottomMargin?: boolean }) => {
    const normalizedDate = localizeDate(date, 'short')
    const { close } = useModal()

    const [removeButtonClicked, setRemoveButtonClicked] = useState(false)

    const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        e.preventDefault()
        if (closeAnimation) {
            setRemoveButtonClicked(true)

            setTimeout(() => {
                onClose?.()
            }, 300)
        } else {
            onClose?.()
        }
    }

    const handleClick = () => {
        onClick?.()
        if (canClose) lkNotificationModel.events.clearById({ id, pageId })
        close()
    }

    return (
        <AutoAccordion forceState={!removeButtonClicked} bottomMargin={bottomMargin}>
            <NotificationItemStyled to={goTo ?? ''} onClick={handleClick}>
                <span className="left-icon">{iconObject()[type]}</span>
                <div className="content">
                    <Subtext fontSize="0.7rem">
                        <DotSeparatedWords words={[normalizedDate ?? '', time ?? '']} />
                    </Subtext>
                    <Flex d="column" gap={gapSize[size]} ai="flex-start">
                        <NotificationTitle fontSize={titleSize[size]}>
                            {fullText ? title : getShortString(title, maxLetters)}
                        </NotificationTitle>
                        <Subtext fontSize={textSize[size] as string}>
                            {fullText ? text : getShortString(text, maxLetters)}
                        </Subtext>
                    </Flex>
                </div>
                {onClose && (
                    <Button
                        isActive={!(loadingRemove && removeButtonClicked)}
                        icon={<FiX />}
                        background="transparent"
                        onClick={handleClose}
                    />
                )}
            </NotificationItemStyled>
        </AutoAccordion>
    )
}

export default NotificationItem
