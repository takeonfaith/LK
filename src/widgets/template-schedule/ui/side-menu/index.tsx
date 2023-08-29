/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { SideMenuStyled } from './styles'
import { User } from 'widgets'
import { LocalSearch } from '@shared/ui/molecules'
import { Title } from '@shared/ui/title'

type Props = {
    teachers: string[]
}

export const SideMenu = ({ teachers }: Props) => {
    return (
        <SideMenuStyled>
            <Title size={4} align="left" bottomGap>
                Преподаватели
            </Title>
            <LocalSearch
                placeholder="Поиск преподавателей"
                whereToSearch={undefined}
                searchEngine={function (value: string, whereToSearch: unknown): unknown {
                    throw new Error('Function not implemented.')
                }}
                setResult={function (res: unknown): void {
                    throw new Error('Function not implemented.')
                }}
            />
            {teachers.map((el) => (
                <User type={'staff'} name={el} key={el} />
            ))}
        </SideMenuStyled>
    )
}
