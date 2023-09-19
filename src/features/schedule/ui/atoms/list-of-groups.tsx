import { SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Title } from '@shared/ui/title'
import React from 'react'
import { BiGroup } from 'react-icons/bi'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useModal } from 'widgets'

const ListOfGroupsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 400px;
        height: 400px;
    }
`

const GroupItem = styled(Link)`
    padding: 8px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: var(--brLight);

    .start {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    &:hover {
        background: var(--theme-1t);
    }
`

type Props = {
    groups: string[]
}

const ListOfGroups = ({ groups }: Props) => {
    const { close } = useModal()
    return (
        <ListOfGroupsStyled>
            <Title size={3} align="left">
                Группы
            </Title>
            {groups.map((group) => {
                return (
                    <GroupItem key={group} to={`${SCHEDULE_ROUTE}/${group}`} onClick={close}>
                        <div className="start">
                            <BiGroup />
                            {group}
                        </div>
                        <FiChevronRight />
                    </GroupItem>
                )
            })}
        </ListOfGroupsStyled>
    )
}

export default ListOfGroups
