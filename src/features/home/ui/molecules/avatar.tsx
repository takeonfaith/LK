import React from 'react'
import { FiUser } from 'react-icons/fi'

import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar: string
}

function Avatar({ avatar }: Props) {
    return <Container>{!!avatar ? <Img src={avatar} alt="Аватар пользователя" /> : <FiUser />}</Container>
}
