import Avatar from '@features/home/ui/molecules/avatar'
import React from 'react'
import styled from 'styled-components'
import getStatus from 'widgets/user/lib/get-status'
import { UserProps } from 'widgets/user/types'
import KeyValue from '../atoms/key-value'
import DotSeparatedWords from '../dot-separated-words'
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

interface Props
    extends Pick<
        UserProps,
        | 'finance'
        | 'educationForm'
        | 'degreeLevel'
        | 'course'
        | 'group'
        | 'type'
        | 'division'
        | 'isMe'
        | 'avatar'
        | 'name'
        | 'faculty'
    > {
    noInfo?: boolean
}

const UserHeader = ({
    avatar,
    name,
    type,
    division,
    group,
    finance,
    educationForm,
    faculty,
    degreeLevel,
    course,
    isMe = false,
    noInfo = false,
}: Props) => {
    const size = noInfo ? '140px' : '110px'
    const status = getStatus(isMe, type, division, group)

    return (
        <UserHeaderStyled>
            <UserHeaderBackground
                fullName={name}
                height="136px"
                width="calc(100% + 16px)"
                baseScale={1}
                baseScaleDelta={0.5}
            />
            <Avatar avatarModal border name={name} avatar={avatar} width={size} height={size} marginRight="0" />
            {!noInfo && (
                <div className="info">
                    <b>{name}</b>
                    <Subtext fontSize="0.9rem">
                        <DotSeparatedWords words={status} />
                    </Subtext>
                    <KeyValue fontSize="0.9rem" visible={!!finance} keyStr={'Уровень финансирование'} value={finance} />
                    <KeyValue fontSize="0.9rem" visible={!!faculty} keyStr={'Факультет'} value={faculty} />
                    <KeyValue
                        fontSize="0.9rem"
                        visible={!!degreeLevel}
                        keyStr={'Уровень образования'}
                        value={degreeLevel}
                    />
                    <KeyValue fontSize="0.9rem" visible={!!course} keyStr={'Курс'} value={course} />
                    <KeyValue
                        fontSize="0.9rem"
                        visible={!!educationForm}
                        keyStr={'Форма образования'}
                        value={educationForm}
                    />
                </div>
            )}
        </UserHeaderStyled>
    )
}

export default UserHeader
