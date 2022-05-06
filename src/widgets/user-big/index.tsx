import Avatar from '@features/home/ui/molecules/avatar'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import React from 'react'
import styled from 'styled-components'

interface Props {
    name: string
    avatar?: string
    loading?: boolean
}

const UserBigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        background: var(--mild-theme);
        /* box-shadow: var(--very-mild-shadow); */
    }
`

const UserBig = ({ name, avatar, loading }: Props) => {
    return !loading ? (
        <UserBigWrapper>
            <Avatar width="70px" height="70px" avatar={avatar} name={name} marginRight="0" />
            <Title size={5}>{name}</Title>
        </UserBigWrapper>
    ) : (
        <SkeletonShape
            shape={'circle'}
            size={{
                width: '40px',
                height: '40px',
            }}
        />
    )
}

export default UserBig
