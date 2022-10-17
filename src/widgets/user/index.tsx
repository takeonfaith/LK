import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Direction, Size } from '@ui/types'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import getFontSize from './lib/get-font-size'
import getImageSize from './lib/get-image-size'
import getWidth from './lib/get-width'
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

    &:hover {
        background: ${Colors.grey.transparentAF};
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({ orientation }) => (orientation === 'vertical' ? 'center' : 'left')};
        margin-top: ${({ orientation }) => (orientation === 'vertical' ? '5px' : '0')};

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
        }
    }
`

interface Props {
    type: 'student' | 'teacher'
    orientation?: Direction
    avatar?: string
    name: string
    loading?: boolean
    size?: Size
    checked?: boolean
    setChecked?: (value: boolean) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const User = ({
    type,
    avatar,
    name,
    checked,
    onClick,
    loading = false,
    orientation = 'horizontal',
    size = 'middle',
}: Props) => {
    const { open } = useModal()

    if (loading) return <SkeletonLoading />

    return (
        <UserWrapper
            orientation={orientation}
            size={size}
            onClick={(e) => {
                if (onClick) {
                    onClick(e)
                } else {
                    open(
                        type === 'teacher' ? (
                            <TeacherModal name={name} avatar={avatar} />
                        ) : (
                            <StudentModal name={name} avatar={avatar} />
                        ),
                    )
                }
            }}
        >
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
                <span className="status"> {type === 'teacher' ? 'Сотрудник' : 'Студент'}</span>
            </div>
        </UserWrapper>
    )
}

export default User
