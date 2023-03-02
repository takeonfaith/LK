import Avatar from '@features/home/ui/molecules/avatar'
import getLettersColors from '@shared/lib/get-letters-colors'
import React from 'react'
import styled from 'styled-components'
import getStatus from 'widgets/user/lib/get-status'
import { UserType } from 'widgets/user/types'
import Subtext from '../subtext'

const UserHeaderStyled = styled.div<{ background?: string }>`
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
`

interface Props {
    avatar?: string
    name: string
    isMe: boolean
    type: UserType
    division?: string
    group?: string
    noInfo?: boolean
}

const UserHeader = ({ avatar, name, isMe, type, division, group, noInfo = false }: Props) => {
    const size = noInfo ? '140px' : '110px'
    return (
        <UserHeaderStyled background={getLettersColors(name, 'darker')}>
            <Avatar border name={name} avatar={avatar} width={size} height={size} marginRight="0" />
            {!noInfo && (
                <div className="info">
                    <b>{name}</b>
                    <Subtext fontSize="0.9rem">{getStatus(isMe, type, division, group)}</Subtext>
                </div>
            )}
        </UserHeaderStyled>
    )
}

export default UserHeader
