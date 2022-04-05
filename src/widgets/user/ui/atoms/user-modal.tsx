import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import styled from 'styled-components'

const TeacherModalWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 280px;
        height: 230px;
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
}

const UserModal = ({ avatar, name, children }: Props) => {
    return (
        <TeacherModalWrapper>
            <div className="teacher">
                <Avatar avatar={avatar} width="110px" height="110px" marginRight="0" />
                <b>{name}</b>
            </div>
            <div className="buttons">{children}</div>
        </TeacherModalWrapper>
    )
}

export default UserModal
