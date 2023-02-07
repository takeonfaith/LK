import { SETTINGS_PERSONAl_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { User } from '@shared/api/model'
import { Colors } from '@shared/consts'
import getLettersColors from '@shared/lib/get-letters-colors'
import useTheme from '@shared/lib/hooks/use-theme'
import { Button } from '@shared/ui/button'
import Subtext from '@shared/ui/subtext'
import React, { useEffect, useState } from 'react'
import { FiEdit2, FiLogOut, FiMoon, FiSettings, FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Slider from 'widgets/slider'

import {
    AvatarWrapper,
    BackgroundPlate,
    BlocksList,
    Buttons,
    IconWrapper,
    Info,
    InfoWrapper,
    TopInfoBlock,
    TopStyled,
} from './styles'

type Props = {
    pages: { title: string }[]
    user: User
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Top = ({ pages, user, currentPage, setCurrentPage }: Props) => {
    const { fullName, avatar, user_status } = user
    const userStatus = user_status === 'stud' ? 'Студент' : 'Сотрудник'

    // const handleMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     contextMenuModel.events.open({
    //         e,
    //         height: 100,
    //         content: <UserContextMenu />,
    //     })
    // }

    const logout = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы точно хотите выйти из аккаунта?',
            onConfirm: userModel.events.logout,
        })
    }

    const { theme, switchTheme } = useTheme()

    const [isLight, setIsLight] = useState(theme === 'light')

    useEffect(() => {
        setIsLight(theme === 'light')
    }, [theme])

    const themeWord = isLight ? 'Светлая' : 'Темная'

    const changeTheme = () => {
        switchTheme(isLight)
        setIsLight((prev) => !prev)
    }

    return (
        <TopStyled>
            <BackgroundPlate color={getLettersColors(fullName, 'dark2')} color2={getLettersColors(fullName, 'light1')}>
                <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                        fill={getLettersColors(fullName, 'dark1')}
                    />
                </svg>
                <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                        fill={getLettersColors(fullName, 'main')}
                    />
                </svg>
                <svg width="620" height="570" viewBox="0 0 620 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z"
                        fill={getLettersColors(fullName, 'light1')}
                    />
                </svg>
            </BackgroundPlate>
            <BlocksList>
                <TopInfoBlock maxWidth="530px" height="180px" orientation="vertical">
                    <AvatarWrapper>
                        <Avatar name={fullName} avatar={avatar} width="110px" height="110px" marginRight="0" border />
                    </AvatarWrapper>
                    <InfoWrapper>
                        <Info>
                            <b>{fullName}</b>
                            <Subtext maxWidth="100%" width="100%" align="center" fontSize="0.9rem">
                                {userStatus}
                            </Subtext>
                        </Info>
                        <Slider
                            sliderWidth="100%"
                            pages={pages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            appearance={false}
                        />
                    </InfoWrapper>
                </TopInfoBlock>
                <TopInfoBlock maxWidth="250px" height="180px">
                    <Buttons>
                        <Link to={SETTINGS_ROUTE}>
                            <Button
                                background={Colors.white.transparent2}
                                icon={
                                    <IconWrapper background={Colors.grey.main}>
                                        <FiSettings />
                                    </IconWrapper>
                                }
                                width="100%"
                                height="72px"
                                text="Настройки"
                                direction="vertical"
                                shrinkTextInMobile
                            />
                        </Link>
                        <Button
                            padding="0"
                            background={Colors.white.transparent2}
                            icon={
                                <IconWrapper background={Colors.green.main}>
                                    {isLight ? <FiSun /> : <FiMoon />}
                                </IconWrapper>
                            }
                            onClick={changeTheme}
                            text={`Тема: ${themeWord}`}
                            width="calc(50% - 5px)"
                            height="72px"
                            direction="vertical"
                            shrinkTextInMobile
                        />
                        <Link to={SETTINGS_PERSONAl_ROUTE}>
                            <Button
                                background={Colors.white.transparent2}
                                icon={
                                    <IconWrapper background={Colors.purple.main}>
                                        <FiEdit2 />
                                    </IconWrapper>
                                }
                                text="Изменить"
                                width="100%"
                                height="72px"
                                direction="vertical"
                                shrinkTextInMobile
                            />
                        </Link>
                        <Button
                            background={Colors.white.transparent2}
                            icon={
                                <IconWrapper background={Colors.red.main}>
                                    <FiLogOut />
                                </IconWrapper>
                            }
                            text="Выйти"
                            height="72px"
                            onClick={logout}
                            width="calc(50% - 5px)"
                            direction="vertical"
                            shrinkTextInMobile
                        />
                    </Buttons>
                </TopInfoBlock>
            </BlocksList>
        </TopStyled>
    )
}

export default Top
