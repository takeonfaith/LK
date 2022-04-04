import { MESSAGES_ROUTE } from '@app/routes/routes'
import { SCHEDULE_ROUTE } from '@app/routes/techers-routes'
import { Colors } from '@consts'
import Avatar from '@features/home/ui/molecules/avatar'
import { Button } from '@ui/atoms'
import React from 'react'
import { FiClock, FiMessageSquare } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import useModal from 'widgets/modal'

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
}

const TeacherModal = ({ avatar, name }: Props) => {
    const history = useHistory()
    const { close } = useModal()
    return (
        <TeacherModalWrapper>
            <div className="teacher">
                <Avatar avatar={avatar} width="110px" height="110px" marginRight="0" />
                <b>{name}</b>
            </div>
            <div className="buttons">
                {/* <Button
                    icon={<FiMessageSquare />}
                    text={'Написать'}
                    onClick={() => history.push(`${MESSAGES_ROUTE}/${name}`)}
                    width="130px"
                    background={Colors.purple.transparent}
                    textColor={Colors.purple.main}
                /> */}
                <Button
                    icon={<FiClock />}
                    text={'Расписание'}
                    onClick={() => {
                        history.push(`${SCHEDULE_ROUTE}/${name}`)
                        close()
                    }}
                    width="130px"
                    background={Colors.blue.transparent}
                    textColor={Colors.blue.main}
                />
            </div>
        </TeacherModalWrapper>
    )
}

export default TeacherModal
