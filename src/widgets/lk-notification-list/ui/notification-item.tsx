import { lkNotificationModel } from '@entities/lk-notifications'
import { NotificationType, TNotification } from '@entities/lk-notifications'
import { Icon } from '@features/all-pages'
import Avatar from '@features/home/ui/molecules/avatar'
import { IColors } from '@shared/consts'
import getShortString from '@shared/lib/get-short-string'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import NewVersionMessage from '@shared/ui/new-version-message'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { HeaderSize, Size } from '@shared/ui/types'
import React from 'react'
import { BiBell, BiRuble } from 'react-icons/bi'
import { FiClock, FiFileText, FiInfo, FiMessageCircle, FiStar, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets/modal/lib'

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

type SizeObject = Record<Size, string | number>

const titleSize: SizeObject = {
    small: 5,
    middle: 5,
    big: 3,
}

const textSize: SizeObject = {
    small: '0.75rem',
    middle: '0.8rem',
    big: '0.9rem',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChatIcon = ({ name, avatar }: { name: string; avatar: string | undefined }) => {
    return <Avatar avatar={avatar} width="38px" height="38px" name={name} marginRight="0" icon={<FiMessageCircle />} />
}

const IconWrapper = ({ color, children }: { color: keyof IColors; children: JSX.Element }) => {
    return <Icon color={color}>{children}</Icon>
}

const iconObject = (name: string, avatar: string | undefined): Record<NotificationType, ChildrenType> => ({
    info: (
        <IconWrapper color="grey">
            <FiInfo />
        </IconWrapper>
    ),
    message: <ChatIcon name={name} avatar={avatar} />,
    alert: (
        <IconWrapper color="blue">
            <BiBell />
        </IconWrapper>
    ),
    'payment-dorm': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'payment-ed': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'digital-services': (
        <IconWrapper color="red">
            <FiFileText />
        </IconWrapper>
    ),
    'doc-for-review': (
        <IconWrapper color="blue">
            <FiFileText />
        </IconWrapper>
    ),
    'hr-applications': (
        <IconWrapper color="green">
            <FiFileText />
        </IconWrapper>
    ),
    'pps-contest': (
        <IconWrapper color="pink">
            <FiStar />
        </IconWrapper>
    ),
    schedule: (
        <IconWrapper color="pink">
            <FiClock />
        </IconWrapper>
    ),
    'schedule-session': (
        <IconWrapper color="pink">
            <FiClock />
        </IconWrapper>
    ),
    'version-update': <NewVersionMessage />,
})

const NotificationItem = ({
    id,
    title,
    text,
    time,
    date,
    onClose,
    onClick,
    type,
    image,
    goTo,
    maxLetters = 200,
    size = 'middle',
}: TNotification & { size?: Size; maxLetters?: number }) => {
    const normalizedDate = localizeDate(date, 'short')
    const { close } = useModal()

    const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        e.preventDefault()
        onClose?.()
    }

    const handleClick = () => {
        onClick?.()
        lkNotificationModel.events.clearById(id)
        close()
    }

    return (
        <NotificationItemStyled to={goTo ?? ''} onClick={handleClick}>
            <span className="left-icon">{iconObject(title, image)[type]}</span>
            <div className="content">
                <Subtext fontSize="0.7rem">
                    <DotSeparatedWords words={[normalizedDate ?? '', time ?? '']} />
                </Subtext>

                <div className="top-content">
                    <Title size={titleSize[size] as HeaderSize} align="left" width="fit-content">
                        {getShortString(title, maxLetters)}
                    </Title>
                </div>
                <Subtext fontSize={textSize[size] as string}>{getShortString(text, maxLetters)}</Subtext>
            </div>
            {onClose && <Button icon={<FiX />} background="transparent" onClick={handleClose} />}
        </NotificationItemStyled>
    )
}

export default NotificationItem
