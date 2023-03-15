import { ALL_STUDENTS_ROUTE, SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Button, TeacherWithModal } from '@ui/atoms'
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FilterScheduleIndicatorWrapper = styled.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

interface Props {
    filter: string
    isGroup?: boolean
}

const GroupLink = styled(Link)`
    font-weight: bold;
    color: var(--text);
    text-decoration: underline;
`

const FilterScheduleIndicator = ({ filter, isGroup }: Props) => {
    const history = useHistory()
    return (
        <FilterScheduleIndicatorWrapper>
            <div>
                Расписание:{' '}
                {!isGroup ? (
                    <TeacherWithModal fio={filter} />
                ) : (
                    <GroupLink to={`${ALL_STUDENTS_ROUTE}/${filter}`}>{filter}</GroupLink>
                )}
            </div>
            <Button
                onClick={() => history.push(SCHEDULE_ROUTE)}
                text="Вернуться к своему расписанию"
                textColor="var(--blue)"
                width="100%"
                background="transparent"
            />
        </FilterScheduleIndicatorWrapper>
    )
}

export default FilterScheduleIndicator
