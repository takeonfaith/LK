import { ALL_STUDENTS_ROUTE, SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Icon } from '@features/all-pages'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { FiClock, FiList, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'

const GroupModalStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;

    @media (min-width: 1001px) {
        min-width: 300px;
        width: 300px;
        height: 300px;
    }
`

const LinkStyled = styled(Link)`
    width: 100%;
`

type Props = {
    group: string
}

const GroupModal = ({ group }: Props) => {
    const { close } = useModal()
    return (
        <GroupModalStyled>
            <Flex d="column" gap="12px" jc="center" h="100%">
                <Icon size={120} color="lightBlue">
                    <FiUsers />
                </Icon>
                <Subtext fontSize="1.2rem">{group}</Subtext>
            </Flex>
            <Flex gap="8px" onClick={close}>
                <LinkStyled to={`${SCHEDULE_ROUTE}/${group}`}>
                    <Button icon={<FiClock />} width="100%" text="Расписание" />
                </LinkStyled>
                <LinkStyled to={`${ALL_STUDENTS_ROUTE}/${group}`}>
                    <Button icon={<FiList />} width="100%" text="Список" />
                </LinkStyled>
            </Flex>
        </GroupModalStyled>
    )
}

export default GroupModal
