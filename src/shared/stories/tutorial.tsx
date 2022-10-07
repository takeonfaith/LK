import { Colors } from '@consts'
import { storyModel } from '@entities/story'
import { Button } from '@ui/button'
import { StoryProps } from '@ui/story/ui/story-page'
// import AllPagesPic from '../images/all-pages.png'
// import CustomizeHomeLinkPic from '../images/customize-home-links.png'
import CustomizeMenuPic from '../images/customize-menu.png'
// import HomePic from '../images/home.png'
// import MenuPic from '../images/menu.png'
// import ProfilePic from '../images/profile.png'
// import SearchPic from '../images/search.png'
import LogoWhite from '../images/mospolytech-logo-white.png'
import React from 'react'

export const TutorialStory: StoryProps[] = [
    {
        title: 'Привет!',
        text: 'Мы обновили меню. Теперь здесь только самые важные разделы. Остальные разделы находятся на странице "Все разделы"',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        color: '#fff',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
        image: LogoWhite,
        imageSize: { width: '100px', height: 'auto' },
        children: (
            <Button
                background={Colors.white.transparentAF}
                textColor="#ffffffa6"
                onClick={() => storyModel.events.close()}
                text="Пропустить обучение"
            />
        ),
    },
    // {
    //     title: 'Навигация по обучению',
    //     text: 'Если хотите вернуться на предыдущую карточку, нажмите в левую часть плитки. Для перехода на следующую - в правую',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    // },
    // {
    //     title: 'Таймер',
    //     text: 'Плитка автоматически переключится через 10 секунд. Если хотите, чтобы она оставалась дольше, нажмите в центре плитки. Итак, начнем',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    // },
    {
        title: 'Обновлены главная страница и профиль.',
        // text: 'Обновлены главная страница и профиль.',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        // imageSize: { width: 'auto', height: '60%' },
        // image: MenuPic,
        // imageAlign: { horizontal: 'center' },
    },
    // {
    //     title: 'Не могу найти раздел',
    //     text: 'Если нужен какой-то раздел, которого нет в меню, зайдите во вкладку "Все разделы"',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    //     image: AllPagesPic,
    //     imageSize: { width: 'auto', height: '50%' },
    //     imageAlign: { horizontal: 'left' },
    // },
    {
        title: 'Как изменить меню?',
        text: 'Добавлена настройка элементов меню, а также настройка виджетов на главной странице.',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        image: CustomizeMenuPic,
        imageSize: { width: 'auto', height: '50%' },
        imageAlign: { horizontal: 'left' },
    },
    // {
    //     title: 'Поиск',
    //     text: 'Если затрудняетесь найти раздел, воспользуйтесь поиском, находящимся на странице "Все разделы"',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     image: SearchPic,
    //     imageSize: { width: '100%', height: 'auto' },
    //     background: 'var(--theme)',
    // },
    // {
    //     title: 'Раздел "Главная"',
    //     text: 'Появился новый раздел. В нем собраны самые используемые страницы и виджеты',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    //     image: HomePic,
    //     imageSize: { width: 'auto', height: '50%' },
    //     imageAlign: { horizontal: 'left' },
    // },
    // {
    //     title: 'И его тоже можно менять',
    //     text: 'Вы можете настраивать, какие виджеты и какие разделы видны, в настройках',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    //     image: CustomizeHomeLinkPic,
    //     imageSize: { width: '300px', height: 'auto' },
    // },
    {
        title: 'Добавлен раздел "Полезная информация".',
        // text: ' Добавлен раздел "Полезная информация"',
        align: {
            horizontal: 'left',
            vertical: 'bottom',
        },
        background: 'var(--theme)',
        // image: ProfilePic,
        imageSize: { width: '300px', height: 'auto' },
        imageAlign: { horizontal: 'center' },
    },
    // {
    //     title: 'Вы готовы, мой ученик!',
    //     text: 'Базовый курс окончен. Удачи вам в использовании личного кабинета. Надеемся, он вам понравится',
    //     align: {
    //         horizontal: 'left',
    //         vertical: 'bottom',
    //     },
    //     background: 'var(--theme)',
    //     image: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/smiling-face-with-sunglasses_1f60e.png',
    //     imageSize: { width: '100px', height: 'auto' },
    //     imageAlign: { horizontal: 'center' },
    // },
]
