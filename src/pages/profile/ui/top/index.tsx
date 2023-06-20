import { SETTINGS_PERSONAl_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { User } from '@shared/api/model'
import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Subtext from '@shared/ui/subtext'
import UserHeaderBackground from '@shared/ui/user-header/user-header-background'
import React from 'react'
import { FiEdit2, FiLogOut, FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Slider from 'widgets/slider'

import ThemeToggle from '@features/theme-toggle'
import { AvatarWrapper, BlocksList, Buttons, IconWrapper, Info, InfoWrapper, TopInfoBlock, TopStyled } from './styles'

type Props = {
    pages: { title: string }[]
    user: User
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Top = ({ pages, user, currentPage, setCurrentPage }: Props) => {
    const { fullName, avatar, user_status, degreeLevel } = user
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

    return (
        <TopStyled>
            <UserHeaderBackground fullName={fullName} width="calc(100% + 32px)" height="210px" baseScale={1.5} />
            <BlocksList>
                <TopInfoBlock maxWidth="530px" height="180px" orientation="vertical">
                    <AvatarWrapper>
                        <Avatar
                            name={fullName}
                            avatar={avatar}
                            width="110px"
                            height="110px"
                            marginRight="0"
                            border
                            avatarModal
                        />
                    </AvatarWrapper>
                    <InfoWrapper>
                        <Info>
                            <b>{fullName}</b>
                            <Subtext maxWidth="100%" width="100%" align="center" fontSize="0.9rem">
                                <DotSeparatedWords words={[userStatus, degreeLevel ?? '']} />
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
                <TopInfoBlock maxWidth="250px" height="fit-content">
                    <Buttons>
                        <Link to={SETTINGS_ROUTE}>
                            <Button
                                background={Colors.white.transparent2}
                                icon={
                                    <IconWrapper width="30px" background={Colors.grey.main}>
                                        <FiSettings />
                                    </IconWrapper>
                                }
                                width="100%"
                                height="73px"
                                text="Настройки"
                                direction="vertical"
                                shrinkTextInMobile
                            />
                        </Link>
                        <ThemeToggle type="v-button" />
                        <Link to={SETTINGS_PERSONAl_ROUTE}>
                            <Button
                                background={Colors.white.transparent2}
                                icon={
                                    <IconWrapper width="30px" background={Colors.purple.main}>
                                        <FiEdit2 />
                                    </IconWrapper>
                                }
                                text="Изменить"
                                width="100%"
                                height="73px"
                                direction="vertical"
                                shrinkTextInMobile
                            />
                        </Link>
                        <Button
                            background={Colors.white.transparent2}
                            icon={
                                <IconWrapper width="30px" background={Colors.red.main}>
                                    <FiLogOut />
                                </IconWrapper>
                            }
                            text="Выйти"
                            height="73px"
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
