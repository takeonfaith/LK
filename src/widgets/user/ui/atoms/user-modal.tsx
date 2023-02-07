import Avatar from '@features/home/ui/molecules/avatar'
import getLettersColors from '@shared/lib/get-letters-colors'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'
import getStatus from 'widgets/user/lib/get-status'
import { UserType } from 'widgets/user/types'

const UserModalWrapper = styled.div<{ background?: string }>`
    @media (min-width: 1001px) {
        width: 330px;
        height: fit-content;
        min-height: 120px;
    }

    display: flex;
    align-items: center;
    height: inherit;
    min-height: inherit;
    flex-direction: column;

    .user {
        display: flex;
        justify-content: center;
        width: 100%;

        &::before {
            content: '';
            width: 100%;
            height: 120px;
            position: absolute;
            top: 0;
            left: 0;
            background: ${({ background }) => background ?? 'var(--scheduleBg)'};
            z-index: -1;
        }

        .info {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            margin-top: 20px;
            width: 100%;

            b {
                margin-bottom: 15px;
                color: #fff;
                display: flex;
                align-items: flex-end;
                height: 42px;
            }
        }
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        & > * + * {
            margin-left: 7px;
        }

        a {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .user {
            .info b {
                width: 90%;
                height: 35px;
            }
            &::before {
                height: 110px;
            }
        }
    }
`

interface Props {
    avatar?: string
    name: string
    children: ChildrenType
    isMe: boolean
    type: UserType
    division?: string
    group?: string
}

const UserModal = ({ avatar, name, isMe, type, division, group, children }: Props) => {
    return (
        <UserModalWrapper background={getLettersColors(name, 'dark1')}>
            <div className="user">
                <Avatar border name={name} avatar={avatar} width="110px" height="110px" marginRight="0" />
                <div className="info">
                    <b>{name}</b>
                    <Subtext fontSize="0.9rem">{getStatus(isMe, type, division, group)}</Subtext>
                </div>
            </div>
            <div className="buttons">{children}</div>
        </UserModalWrapper>
    )
}

export default UserModal
