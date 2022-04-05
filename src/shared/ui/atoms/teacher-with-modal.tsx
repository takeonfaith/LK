import { SCHEDULE_ROUTE } from '@app/routes/routes'
import { Colors } from '@consts'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { TeacherModal } from 'widgets/user/ui'
import { Button } from '.'

const TeacherWidthModalWrapper = styled.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

interface Props {
    fio: string
}

const TeacherWidthModal = ({ fio }: Props) => {
    const { open, close } = useModal()
    const history = useHistory()

    return (
        <TeacherWidthModalWrapper
            onClick={() =>
                open(
                    <TeacherModal name={fio}>
                        <Button
                            icon={<FiClock />}
                            text={'Расписание'}
                            onClick={() => {
                                history.push(`${SCHEDULE_ROUTE}/${fio}`)
                                close()
                            }}
                            width="130px"
                            background={Colors.blue.transparent}
                            textColor={Colors.blue.main}
                        />
                    </TeacherModal>,
                )
            }
        >
            {fio}
        </TeacherWidthModalWrapper>
    )
}

export default TeacherWidthModal
