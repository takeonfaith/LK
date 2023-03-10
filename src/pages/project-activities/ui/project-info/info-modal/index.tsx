import { Project } from '@shared/api/model/project-activites'
import getShortStirng from '@shared/lib/get-short-string'
import isValidURL from '@shared/lib/is-valid-url'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

const ModalStyled = styled.div`
    max-width: 400px;
`

type Props = {
    data?: Project | null
}

const InfoModal = ({ data }: Props) => {
    const splitted = data?.project_info.split(' ')
    return (
        <ModalStyled>
            <Title size={4} bottomGap align="left">
                Информация
            </Title>
            {splitted?.map((word) => {
                const isLink = isValidURL(word)

                return isLink ? <a href={word}>{getShortStirng(word, 30)}</a> : word + ' '
            })}
        </ModalStyled>
    )
}

export default InfoModal
