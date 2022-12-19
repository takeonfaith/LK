import Avatar from '@features/home/ui/molecules/avatar'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'
import getStatus from 'widgets/user/lib/get-status'
import { UserType } from 'widgets/user/types'

const TeacherModalWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 400px;
        height: 250px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    min-height: inherit;
    flex-direction: column;

    .teacher {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        & > b {
            margin-top: 10px;
        }
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > * + * {
            margin-left: 7px;
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
        <TeacherModalWrapper>
            <div className="teacher">
                <Avatar name={name} avatar={avatar} width="110px" height="110px" marginRight="0" />
                <b>{name}</b>
                <Subtext align="center">{getStatus(isMe, type, division, group)}</Subtext>
            </div>
            <div className="buttons">{children}</div>
        </TeacherModalWrapper>
    )
}

export default UserModal
