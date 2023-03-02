import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import styled from 'styled-components'
import getStatus from 'widgets/user/lib/get-status'
import { UserType } from 'widgets/user/types'
import Subtext from '../subtext'
import UserHeaderBackground from './user-header-background'

const UserHeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

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
        <UserHeaderStyled>
            <UserHeaderBackground
                fullName={name}
                height="136px"
                width="calc(100% + 16px)"
                baseScale={1}
                baseScaleDelta={0.5}
            />
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
