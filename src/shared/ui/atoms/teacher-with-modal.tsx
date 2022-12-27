import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { TeacherModal } from 'widgets/user/ui'

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
    const { open } = useModal()

    return (
        <TeacherWidthModalWrapper onClick={() => open(<TeacherModal name={fio} isMe={false} />)}>
            {fio}
        </TeacherWidthModalWrapper>
    )
}

export default TeacherWidthModal
