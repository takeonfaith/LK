import { SETTINGS_APPEARANCE_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { UserInfo } from '@features/profile'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import List from '@ui/list'
import { ListWrapper } from '@ui/list/styles'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import { FiLogOut, FiSettings, FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../shared/images/logo-mobile-app.png'
import { AvailableAccounts, StoryCard } from 'widgets'
import React from 'react'

const ProfileWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 150px;
    color: var(--text);
    /* background-image: radial-gradient(farthest-side at top left, ${Colors.blue.main}, transparent 65%),
        radial-gradient(farthest-side at top center, ${Colors.purple.main}, transparent 65%),
        radial-gradient(farthest-side at top right, ${Colors.orange.main}, transparent 65%),
        radial-gradient(farthest-side at top right, ${Colors.purple.main}, transparent 65%),
        radial-gradient(farthest-corner at top right, ${Colors.red.main}, transparent 65%); */

    @media (max-width: 1000px) {
        padding: 40px;
    }

    @media (max-width: 600px) {
        padding: 20px;
        background-image: radial-gradient(600px 600px at top left, ${Colors.blue.main}, transparent 45%),
            radial-gradient(600px 600px at top center, ${Colors.purple.main}, transparent 45%),
            radial-gradient(600px 600px at top right, ${Colors.orange.main}, transparent 45%),
            radial-gradient(600px 600px at top right, ${Colors.purple.main}, transparent 45%),
            radial-gradient(600px 600px at top right, ${Colors.red.main}, transparent 45%);
    }
`

const ProfileTop = styled(ListWrapper)`
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        .title-wrapper {
            justify-content: center;
        }

        span {
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        padding-top: 40px;
        margin-bottom: 0px;
    }
`

const GradientCircle = styled.div<{ current: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: ${({ current }) => current && '2px solid var(--theme)'};
    outline: ${({ current }) => current && '2px solid var(--reallyBlue)'};
    background-image: radial-gradient(farthest-side at top left, ${Colors.blue.main}, transparent 100%),
        radial-gradient(farthest-side at top center, ${Colors.purple.main}, transparent 100%),
        radial-gradient(farthest-side at top right, ${Colors.orange.main}, transparent 100%),
        radial-gradient(farthest-side at top right, ${Colors.purple.main}, transparent 100%),
        radial-gradient(farthest-corner at top right, ${Colors.red.main}, transparent 100%);
`

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!user || !allRoutes) return null

    if (!!error) return <Error text={error} />

    return (
        <ProfileWrapper>
            <ProfileTop
                horizontalAlign="center"
                wrapOnMobile
                padding="100px"
                direction="horizontal"
                verticalAlign="center"
                gap={30}
            >
                <Avatar
                    name={user.fullName}
                    avatar={user.avatar}
                    width="120px"
                    height="120px"
                    marginRight="0"
                    boxShadow="0 0 80px #00000044"
                />
                <List horizontalAlign="center">
                    <Title size={3} align="left">
                        {user.fullName}
                    </Title>
                    <Subtext visible={!!user.specialty} width="100%">
                        Специальность: {user.specialty}
                    </Subtext>
                    <Subtext width="100%" maxWidth="100%">
                        {user.user_status === 'stud' ? 'Студент' : 'Сотрудник'}{' '}
                        {user.user_status === 'stud' && `${user.course} Курс`}
                    </Subtext>
                </List>
                <List
                    direction="horizontal"
                    verticalAlign="top"
                    horizontalAlign="center"
                    height="100%"
                    padding="15px 0"
                >
                    {/* <Button icon={<GradientCircle current />} height="27px" background="transparent" /> */}
                    <Link to={SETTINGS_APPEARANCE_ROUTE}>
                        <Button icon={<FiSun />} background={Colors.white.transparentAF} height="27px" />
                    </Link>
                    <Link to={SETTINGS_ROUTE}>
                        <Button icon={<FiSettings />} background={Colors.white.transparentAF} height="27px" />
                    </Link>
                    <Button
                        onClick={() =>
                            confirmModel.events.evokeConfirm({
                                message: 'Вы точно хотите выйти из аккаунта?',
                                onConfirm: userModel.events.logout,
                            })
                        }
                        icon={<FiLogOut />}
                        background={Colors.white.transparentAF}
                        height="27px"
                    />
                </List>
            </ProfileTop>
            <List direction="horizontal" innerPadding="20px" showPages>
                <StoryCard
                    title="Обучение"
                    content={[
                        {
                            title: 'Привет!',
                            text: 'Здесь мы кратко расскажем о главных изменениях в новом дизайне',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: 'var(--text)',
                            background: 'var(--schedule)',
                            image: Logo,
                        },
                        {
                            title: 'Новое меню',
                            text: 'Мы обновили меню. Теперь здесь только самые важные элементы',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                        {
                            title: 'Новое меню',
                            text: 'Если нужен какой-то раздел, которого нет в меню, зайдите во вкладку "Все разделы"',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                        {
                            title: 'Поиск',
                            text: 'Если затрудняетесь найти раздел, воспользуйтесь поиском, находящимся на странице "Все разделы"',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                        {
                            title: 'Раздел "Главная"',
                            text: 'Появился новый раздел. В нем собраны самые используемые страницы, виджеты, а в будущем, может, и что-нибудь еще',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                        {
                            title: 'Личные данные',
                            text: 'Если необходимо посмотреть свои данные, можете зайти в раздел профиль, нажав на свою фотографию вверху меню',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    title="Заявления"
                    content={[
                        {
                            title: 'Наконец! Страница заявлений!',
                            text: 'Вы долго просили и вот она',
                            textAlign: 'center',
                            align: {
                                horizontal: 'center',
                                vertical: 'center',
                            },
                            color: 'var(--text)',
                            background: 'var(--orangeGradient)',
                        },
                    ]}
                />
            </List>
            {/* <AvailableAccounts /> */}
            <UserInfo />
        </ProfileWrapper>
    )
}

export default ProfilePage
