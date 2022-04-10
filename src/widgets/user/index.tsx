import { SCHEDULE_ROUTE } from '@app/routes/routes'
import { MESSAGES_ROUTE } from '@app/routes/techers-routes'
import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { SkeletonLoading, UserModal } from './ui'

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: var(--brLight);
    color: var(--text);
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: var(--search);
    }

    .name-and-status {
        display: flex;
        flex-direction: column;

        .name {
            font-size: 0.85em;
        }

        .status {
            font-size: 0.7em;
            opacity: 0.6;
        }
    }
`

interface Props {
    type: 'student' | 'teacher'
    avatar?: string
    name: string
    loading?: boolean
}

const User = ({ type, avatar, name, loading = false }: Props) => {
    const { open, close } = useModal()
    const history = useHistory()

    return !loading ? (
        <UserWrapper
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
                                      history.push(`${MESSAGES_ROUTE}/${name}`)
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
            <Avatar avatar={avatar} width="30px" height="30px" marginRight="7px" />
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
