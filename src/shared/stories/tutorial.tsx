import { SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE, SETTINGS_HOME_PAGE_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { storyModel } from '@entities/story'
import { Button } from '@ui/button'
import { StoryProps } from '@ui/story/ui/story-page'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuPic from '../images/menu.png'
import AllPagesPic from '../images/all-pages.png'
import CustomizeMenuPic from '../images/customize-menu.png'
import SearchPic from '../images/search.png'
import HomePic from '../images/home.png'
import CustomizeHomeLinkPic from '../images/customize-home-links.png'
import ProfilePic from '../images/profile.png'

export const TutorialStory: StoryProps[] = [
    {
        title: 'Привет!',
        text: 'Мы обновили дизайн. Это небольшое обучение по главным нововведениям. Для продолжения нажмите в правую часть плитки. Вы можете пропустить обучение и вернуться к нему позже, зайдя в раздел "Профиль"',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        color: '#fff',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
        children: (
            <Button
                background={Colors.white.transparentAF}
                textColor="#ffffffa6"
                onClick={() => storyModel.events.close()}
                text="Пропустить обучение"
            />
        ),
    },
    {
        title: 'Навигация по обучению',
        text: 'Если хотите вернуться на предыдущую карточку, нажмите в левую часть плитки. Для перехода на следующую - в правую',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
    },
    {
        title: 'Таймер',
        text: 'Плитка автоматически переключится через 10 секунд. Если хотите, чтобы она оставалась дольше, нажмите в центре плитки. Итак, начнем',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
    },
    {
        title: 'Новое меню',
        text: 'Мы обновили меню. Теперь здесь только самые важные элементы',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        imageSize: { width: 'auto', height: '60%' },
        image: MenuPic,
        imageAlign: { horizontal: 'center' },
    },
    {
        title: 'Не могу найти раздел',
        text: 'Если нужен какой-то раздел, которого нет в меню, зайдите во вкладку "Все разделы"',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: AllPagesPic,
        imageSize: { width: 'auto', height: '50%' },
        imageAlign: { horizontal: 'left' },
    },
    {
        title: 'Как изменить меню?',
        text: 'Если вам не хватает каких-то разделов внутри меню, можете зайти в настройки и добавить самое необходимое',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: CustomizeMenuPic,
        imageSize: { width: 'auto', height: '50%' },
        imageAlign: { horizontal: 'left' },
        children: (
            <Link onClick={() => storyModel.events.close()} to={SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE}>
                Настройки меню
            </Link>
        ),
    },
    {
        title: 'Поиск',
        text: 'Если затрудняетесь найти раздел, воспользуйтесь поиском, находящимся на странице "Все разделы"',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        image: SearchPic,
        imageSize: { width: '200px', height: 'auto' },
        background: 'var(--theme)',
    },
    {
        title: 'Раздел "Главная"',
        text: 'Появился новый раздел. В нем собраны самые используемые страницы и виджеты',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: HomePic,
        imageSize: { width: 'auto', height: '50%' },
        imageAlign: { horizontal: 'left' },
    },
    {
        title: 'И его тоже можно менять',
        text: 'Вы можете настраивать, какие виджеты и какие разделы видны, в настройках',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: CustomizeHomeLinkPic,
        imageSize: { width: '300px', height: 'auto' },
        children: (
            <Link onClick={() => storyModel.events.close()} to={SETTINGS_HOME_PAGE_ROUTE}>
                Настройки главной страницы
            </Link>
        ),
    },
    {
        title: 'Личные данные',
        text: 'Если необходимо посмотреть свои данные, можете зайти в раздел профиль, нажав на свою фотографию вверху меню',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: ProfilePic,
        imageSize: { width: '300px', height: 'auto' },
        imageAlign: { horizontal: 'center' },
    },
    {
        title: 'Вы готовы, мой ученик!',
        text: 'Базовый курс закончен. Удачи вам в использовании личного кабинета. Надеемся, он вам понравится',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/smiling-face-with-sunglasses_1f60e.png',
        imageSize: { width: '100px', height: 'auto' },
        imageAlign: { horizontal: 'center' },
    },
]
