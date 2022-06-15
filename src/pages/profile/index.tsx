import { SETTINGS_APPEARANCE_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { confirmModel } from '@entities/confirm'
import { menuModel } from '@entities/menu'
import { storyModel } from '@entities/story'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { UserInfo } from '@features/profile'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import List from '@ui/list'
import { ListWrapper } from '@ui/list/styles'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import React from 'react'
import { FiLogOut, FiSettings, FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AvailableAccounts, StoryCard } from 'widgets'

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
                    <Button icon={<GradientCircle current />} height="27px" background="transparent" />
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
                    content={[
                        {
                            title: 'Test',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://cs4.pikabu.ru/post_img/big/2016/05/25/6/1464163350188194633.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    content={[
                        {
                            title: 'Testвф',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://searchthisweb.com/wallpaper/thumb/main_ferrari_3840x2160_pbrox.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    content={[
                        {
                            title: 'Test',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/350593964.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    content={[
                        {
                            title: 'Test',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/350593964.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    content={[
                        {
                            title: 'Test',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/350593964.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
                <StoryCard
                    content={[
                        {
                            title: 'Test',
                            text: 'Tewrekmqqkfmwdkmc',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            color: '#fff',
                            image: 'https://fullhdoboi.ru/wp-content/uploads/_ph/6/350593964.jpg',
                        },
                        {
                            title: 'Test2',
                            align: {
                                horizontal: 'left',
                                vertical: 'bottom',
                            },
                            background: 'var(--theme)',
                        },
                    ]}
                />
            </List>
            <AvailableAccounts />
            <UserInfo />
        </ProfileWrapper>
    )
}

export default ProfilePage
