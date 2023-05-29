import React from 'react'
import {
    CANT_ACCESS_ROUTE,
    FEEDBACK_ROUTE,
    GET_YOUR_LOGIN_ROUTE,
    MEMO_FRESHMEN_ROUTE,
    MEMO_TEACHER_ROUTE,
} from '@app/routes/general-routes'
import { OLD_LK_URL } from '@shared/constants/consts'
import { LinkButton } from '@ui/atoms'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import List from '@ui/list'
import { Logo } from '@ui/logo'
import { BiHeadphone } from 'react-icons/bi'
import { BsAsterisk } from 'react-icons/bs'
import { FiAlertCircle, FiArrowLeftCircle, FiMeh } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Information = () => {
    return (
        <div className="left">
            <List scroll={false} height="100%" verticalAlign="space-between" position="static">
                <Logo width="50px" short className="logo first" />
                <List gap={12} scroll={false} height="100%" verticalAlign="center">
                    <Link to={FEEDBACK_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<BiHeadphone />}
                            text="Обратная связь"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={GET_YOUR_LOGIN_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<BsAsterisk />}
                            text="Узнать свой логин ЕУЗ"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={MEMO_FRESHMEN_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiAlertCircle />}
                            text="Вниманию студентов 1 курса!"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>
                    <Link to={MEMO_TEACHER_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiAlertCircle />}
                            text="Вниманию сотрудников!"
                            height="25px"
                            background="transparent"
                            textColor="var(--theme-mild-opposite)"
                        />
                    </Link>

                    <Divider />
                    <Link to={CANT_ACCESS_ROUTE} tabIndex={-1}>
                        <Button
                            padding="0"
                            icon={<FiMeh />}
                            text="Не получается войти"
                            height="25px"
                            align="left"
                            background="transparent"
                            textColor="var(--red)"
                        />
                    </Link>
                </List>

                <StyledLinkButton
                    text={'Перейти к старому дизайну'}
                    onClick={() => {
                        localStorage.setItem('useOldVersion', 'true')
                    }}
                    icon={<FiArrowLeftCircle />}
                    align="left"
                    href={`${OLD_LK_URL}/index.php`}
                />
            </List>
        </div>
    )
}

const StyledLinkButton = styled(LinkButton)`
    background-color: transparent;
    color: var(--reallyBlue);
    padding: 0;
    width: 100%;
`

export default Information
