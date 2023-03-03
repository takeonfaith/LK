import UserHeader from '@shared/ui/user-header'
import React from 'react'
import styled from 'styled-components'
import { UserProps } from 'widgets/user/types'

const UserModalWrapper = styled.div`
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

type Props = Pick<
    UserProps,
    'finance' | 'educationForm' | 'degreeLevel' | 'course' | 'group' | 'type' | 'division' | 'isMe' | 'avatar' | 'name'
>

const UserModal = (
    props: Props & {
        children: ChildrenType
    },
) => {
    const { children } = props
    return (
        <UserModalWrapper>
            <UserHeader {...props} />
            <div className="buttons">{children}</div>
        </UserModalWrapper>
    )
}

export default UserModal
