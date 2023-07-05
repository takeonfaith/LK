import { Colors } from '@consts'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { Icon } from '@features/all-pages'
import getShortStirng from '@shared/lib/get-short-string'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { Button, SkeletonShape, Title } from '@ui/atoms'
import { DotPages } from '@ui/molecules'
import limitNumber from '@utils/limit-number'
import React, { useState } from 'react'
import { FiClock, FiSearch } from 'react-icons/fi'
import { MdOutlineNotifications } from 'react-icons/md'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { WhatsNewTemplate } from './ui'
import AlertItem from 'widgets/alerts-widget/alert-item'

const WhatsNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
        height: 350px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`

const NotificationWrapper = styled.div`
    padding: 8px;
    background: var(--search);
    border-radius: var(--brLight);

    &.first {
        z-index: 1;
    }

    &.second {
        transform: scale(0.93) translateY(-25px);
        z-index: 0;
        opacity: 0.4;
    }
`

const NewsNewWrapper = styled.div`
    pointer-events: none;
`

const NotificationNew = () => {
    return (
        <Flex d="column" gap="0px">
            <NotificationWrapper className="first">
                <Flex gap="16px" w="fit-content">
                    <Icon color="orange">
                        <MdOutlineNotifications />
                    </Icon>
                    <Flex d="column" gap="4px" ai="flex-start">
                        <SkeletonShape
                            pulse={false}
                            size={{ width: '250px', height: '10px' }}
                            shape="rect"
                            margin="0"
                        />
                        <SkeletonShape pulse={false} size={{ width: '190px', height: '8px' }} shape="rect" margin="0" />
                    </Flex>
                </Flex>
            </NotificationWrapper>
            <NotificationWrapper className="second">
                <Flex gap="16px" w="fit-content">
                    <Icon color="orange">
                        <MdOutlineNotifications />
                    </Icon>
                    <Flex d="column" gap="4px" ai="flex-start">
                        <SkeletonShape
                            pulse={false}
                            size={{ width: '250px', height: '10px' }}
                            shape="rect"
                            margin="0"
                        />
                        <SkeletonShape pulse={false} size={{ width: '190px', height: '8px' }} shape="rect" margin="0" />
                    </Flex>
                </Flex>
            </NotificationWrapper>
        </Flex>
    )
}

const SearchNew = () => {
    return (
        <Flex d="column" gap="8px">
            <Block height="fit-content" padding="12px" maxWidth="320px">
                <Flex gap="8px">
                    <FiSearch />
                    Распис
                </Flex>
            </Block>
            <NotificationWrapper>
                <Flex gap="16px" w="fit-content">
                    <Icon color="pink">
                        <FiClock />
                    </Icon>
                    <Flex d="column" gap="4px" ai="flex-start">
                        <SkeletonShape
                            pulse={false}
                            size={{ width: '250px', height: '10px' }}
                            shape="rect"
                            margin="0"
                        />
                        <SkeletonShape pulse={false} size={{ width: '190px', height: '8px' }} shape="rect" margin="0" />
                    </Flex>
                </Flex>
            </NotificationWrapper>
        </Flex>
    )
}

const NewsNew = () => {
    return (
        <NewsNewWrapper>
            <Flex mw="250px">
                <AlertItem
                    news={{
                        title: 'Новости',
                        time: '4:20',
                        content: 'Как неожиданно и приятно',
                        date: 'January 1, 1984',
                        id: 0,
                    }}
                />
            </Flex>
        </NewsNewWrapper>
    )
}

const PagesNew = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()
    if (!allRoutes) return null
    const pages = [allRoutes['home'], allRoutes['payments']]
    if (user?.user_status === 'stud') pages.push(allRoutes['acad-performance'])
    return (
        <Flex gap="0px" jc="center">
            {pages.map(({ color, icon, id, title }) => (
                <Flex d="column" key={id} gap="12px" w="110px">
                    <Icon badge="1" color={color} size={50}>
                        {icon}
                    </Icon>
                    <Title size={5}>{getShortStirng(title, 8)}</Title>
                </Flex>
            ))}
        </Flex>
    )
}

const WhatsNew = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const { isMobile } = useCurrentDevice()
    const { close } = useModal()
    const pages = [
        <WhatsNewTemplate
            key={0}
            image={{
                component: <NotificationNew />,
                title: 'Уведомления',
            }}
            text="Теперь стало проще отслеживать важную информацию, будь то новое сообщение, новости, оплаты или что-либо еще"
        />,
        <WhatsNewTemplate
            key={1}
            image={{
                component: <SearchNew />,
                title: 'Глобальный поиск',
            }}
            text={`Поможет найти то, что нужно. Находится на главной странице или ${
                isMobile ? 'в верхней части личного кабинета' : 'в меню'
            }`}
        />,
        <WhatsNewTemplate
            key={2}
            image={{
                component: <NewsNew />,
                title: 'Раздел Новости',
            }}
            text={'Виджет с новостями добавлен на главный экран, дизайн стал аккуратнее'}
        />,
        <WhatsNewTemplate
            key={3}
            image={{
                component: <PagesNew />,
                title: 'Обновлены страницы',
            }}
            text={'Интерфейс стал понятнее и чище'}
        />,
    ]

    return (
        <WhatsNewWrapper>
            <div className="content">{pages[currentPage]}</div>
            <DotPages amount={pages.length} current={currentPage} />
            <div className="buttons">
                <Button
                    onClick={() => setCurrentPage((prev) => limitNumber(prev - 1, pages.length - 1))}
                    text="Назад"
                    width="100%"
                    isActive={currentPage !== 0}
                />
                {currentPage === pages.length - 1 ? (
                    <Button
                        onClick={close}
                        text="Готово"
                        width="100%"
                        background={Colors.blue.light1}
                        textColor="#fff"
                    />
                ) : (
                    <Button
                        onClick={() => setCurrentPage((prev) => limitNumber(prev + 1, pages.length - 1))}
                        text="Далее"
                        width="100%"
                    />
                )}
            </div>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
