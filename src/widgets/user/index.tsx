import { CHAT_ROUTE, SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/button'
import { Direction } from '@ui/types'
import React from 'react'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { SkeletonLoading, UserModal } from './ui'

const UserWrapper = styled.div<{ orientation: Direction }>`
    display: flex;
    align-items: center;
    flex-direction: ${({ orientation }) => orientation === 'vertical' && 'column'};
    padding: ${({ orientation }) => (orientation === 'vertical' ? '10px' : '8px')};
    border-radius: var(--brLight);
    color: var(--text);
    font-weight: 600;
    cursor: pointer;
    width: ${({ orientation }) => orientation === 'vertical' && '90px'};

    &:hover {
        background: var(--search);
    }

    .name-and-status {
        display: flex;
        flex-direction: column;
        text-align: ${({ orientation }) => (orientation === 'vertical' ? 'center' : 'left')};
        margin-top: ${({ orientation }) => (orientation === 'vertical' ? '5px' : '0')};

        .name {
            font-size: 0.85em;
            width: ${({ orientation }) => orientation === 'vertical' && '70px'};
            white-space: ${({ orientation }) => orientation === 'vertical' && 'nowrap'};
            overflow: ${({ orientation }) => orientation === 'vertical' && 'hidden'};
            text-overflow: ${({ orientation }) => orientation === 'vertical' && 'ellipsis'};
        }

        .status {
            font-size: 0.7em;
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
}

const User = ({ type, avatar, name, loading = false, orientation = 'horizontal' }: Props) => {
    const { open, close } = useModal()
    const history = useHistory()

    return !loading ? (
        <UserWrapper
            orientation={orientation}
            onClick={() =>
                type === 'teacher'
                    ? open(
                          <UserModal avatar={avatar} name={name}>
                              <Button
                                  icon={<FiClock />}
                                  text={'Расписание'}
                                  onClick={() => {
                                      history.push(`${SCHEDULE_ROUTE}/${name}`)
                                      close()
                                  }}
                                  width="130px"
                                  background={Colors.blue.light}
                                  textColor="#fff"
                              />
                          </UserModal>,
                      )
                    : open(
                          <UserModal avatar={avatar} name={name}>
                              <Button
                                  icon={<FiMessageCircle />}
                                  text={'Написать'}
                                  onClick={() => {
                                      history.push(`${CHAT_ROUTE}/${name}`)
                                      close()
                                  }}
                                  width="130px"
                                  background={Colors.purple.light}
                                  textColor="#fff"
                              />
                          </UserModal>,
                      )
            }
        >
            <Avatar
                name={name}
                avatar={avatar}
                width={orientation === 'horizontal' ? '30px' : '45px'}
                height={orientation === 'horizontal' ? '30px' : '45px'}
                marginRight={orientation === 'horizontal' ? '7px' : '0px'}
            />
            <div className="name-and-status">
                <span className="name">{name}</span>
                <span className="status"> {type === 'teacher' ? 'Сотрудник' : 'Студент'}</span>
            </div>
        </UserWrapper>
    ) : (
        <SkeletonLoading />
    )
}

export default User
