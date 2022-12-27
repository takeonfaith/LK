import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Direction, Size } from '@ui/types'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import getFontSize from './lib/get-font-size'
import getImageSize from './lib/get-image-size'
import getStatus from './lib/get-status'
import getWidth from './lib/get-width'
import { UserProps } from './types'
import { SkeletonLoading, StudentModal, TeacherModal } from './ui'

const UserWrapper = styled.div<{ orientation: Direction; size: Size }>`
    display: flex;
    align-items: center;
    flex-direction: ${({ orientation }) => orientation === 'vertical' && 'column'};
    padding: ${({ orientation }) => (orientation === 'vertical' ? '10px' : '8px')};
    border-radius: var(--brLight);
    color: var(--text);
    font-weight: 600;
    cursor: pointer;
    width: ${({ orientation, size }) => (orientation === 'vertical' ? getWidth(size) : '100%')};

    .index {
        min-width: 30px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 0.85rem;
        color: var(--theme-mild-opposite);
    }

    &:hover {
        background: ${Colors.grey.transparentAF};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({ orientation }) => (orientation === 'vertical' ? 'center' : 'left')};
        margin-top: ${({ orientation }) => (orientation === 'vertical' ? '5px' : '0')};
        width: calc(100% - 60px);

        .name {
            font-size: ${({ size }) => getFontSize(size)};
            width: ${({ orientation }) => orientation === 'vertical' && '70px'};
            white-space: ${({ orientation }) => orientation === 'vertical' && 'nowrap'};
            overflow: ${({ orientation }) => orientation === 'vertical' && 'hidden'};
            text-overflow: ${({ orientation }) => orientation === 'vertical' && 'ellipsis'};
        }

        .status {
            font-size: ${({ size }) => `calc(${getFontSize(size)} - 0.1em)`};
            opacity: 0.6;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
        }
    }
`

const User = ({
    type,
    avatar,
    name,
    checked,
    onClick,
    indexNumber,
    division,
    group,
    isMe = false,
    loading = false,
    orientation = 'horizontal',
    size = 'middle',
}: UserProps) => {
    const { open } = useModal()
    const status = getStatus(isMe, type, division, group)

    if (loading) return <SkeletonLoading />

    const handleUserClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (onClick) {
            onClick(e)
        } else {
            if (!isMe) {
                open(
                    type === 'teacher' ? (
                        <TeacherModal name={name} avatar={avatar} isMe={isMe} division={division} />
                    ) : (
                        <StudentModal name={name} avatar={avatar} isMe={isMe} group={group} />
                    ),
                )
            }
        }
    }

    return (
        <UserWrapper orientation={orientation} size={size} onClick={handleUserClick}>
            {indexNumber && <div className="index">{indexNumber}</div>}
            <Avatar
                name={name}
                avatar={avatar}
                width={getImageSize(orientation, size)}
                height={getImageSize(orientation, size)}
                marginRight={orientation === 'horizontal' ? '7px' : '0px'}
                checked={checked}
            />
            <div className="name-and-status">
                <span className="name">{name}</span>
                <span className="status"> {status}</span>
            </div>
        </UserWrapper>
    )
}

export default User
