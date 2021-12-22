import React from 'react'
import { FiUser } from 'react-icons/fi'

import { Container, Img } from '../atoms/avatar'

export default Avatar

interface Props {
    avatar: string
}

function Avatar({ avatar }: Props) {
    console.log(avatar)

    return (
        <Container>
            <FiUser />
        </Container>
    )
}
