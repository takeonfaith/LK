/* eslint-disable @typescript-eslint/no-unused-vars */
import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import SearchWithHints from '@features/search-with-hints'
import { getGroups } from '@shared/api/student-api'
import useCurrentExactPage from '@shared/lib/hooks/use-current-exact-page'
import Masks from '@shared/lib/masks'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import { Hint } from '@shared/ui/search'
import { Title } from '@shared/ui/title'
import React, { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { NewPageLink } from './new-page-link'
import { SideMenuStyled } from './styles'
import { useLocation } from 'react-router'
import { scheduleRoutes } from '@app/routes/general-routes'

export const SideMenu = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [groupSearch, setGroupSearch] = useState('')

    const location = useLocation()

    const onHintClick = (hint: Hint | undefined) => {
        scheduleModel.effects.getScheduleFx({ user, group: hint?.value ?? '' })
    }

    const onValueEmpty = () => {
        scheduleModel.effects.getScheduleFx({ user, group: '' })
    }

    return (
        <SideMenuStyled>
            <SearchWithHints
                value={groupSearch}
                setValue={setGroupSearch}
                onHintClick={onHintClick}
                placeholder={'Группа/Преподаватель'}
                customMask={Masks.groupMask}
                request={getGroups}
                leftIcon={<FiUsers />}
                onValueEmpty={user?.user_status === 'staff' ? onValueEmpty : undefined}
            />
            <Divider margin="16px 0" />
            <Flex d="column" gap="2px" ai="flex-start">
                {Object.keys(scheduleRoutes ?? {}).map((key) => {
                    const { id, path } = scheduleRoutes[key]
                    return (
                        <NewPageLink
                            key={id}
                            disabled={id === 'schedule-session'}
                            isCurrent={location.pathname === path}
                            route={scheduleRoutes[key]}
                        />
                    )
                })}
            </Flex>

            {/* 
            <Divider margin="16px 0" />
            <Title size={4} align="left">
                Преподаватели
            </Title>
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
            */}
            {/* {teachers.map((el) => (
                <User type={'staff'} name={el} key={el} />
            ))} */}
        </SideMenuStyled>
    )
}
