import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { TeacherModal } from 'widgets/user/ui'

const TeacherWithModalWrapper = styled.strong`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

interface Props {
    fio: string
}

const TeacherWithModal = ({ fio }: Props) => {
    const { open } = useModal()

    return (
        <TeacherWithModalWrapper onClick={() => open(<TeacherModal name={fio} isMe={false} />)}>
            {fio}
        </TeacherWithModalWrapper>
    )
}

export default TeacherWithModal
