import { userModel } from '@entities/user'
import { Colors } from '@shared/consts'
import getLettersColors from '@shared/lib/get-letters-colors'
import shuffleArray from '@shared/lib/shuffle-array'
import React from 'react'
import styled from 'styled-components'

const ProfileTopPlateStyled = styled.div<{ background1: string; background2: string }>`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ background1, background2 }) => `linear-gradient(180deg, ${background1}, ${background2})`};
    z-index: -1;
    overflow: hidden;
`

const Line = styled.div<{ shift: number }>`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
    height: 40px;
    transform: translateX(${({ shift }) => -shift * 40 + '%'}) translateY(-10%);
`

const Words = styled.div`
    font-size: 2.1rem;
    color: ${({ color }) => color};
    opacity: 0.1;
    white-space: nowrap;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const LINES = 8
const STUDENT_WORDS = [
    'Московский политех',
    'Самый лучший',
    'Кто мы? Кто мы? Кто мы?',
    'Московский Поликек',
    'Пряники',
    'Автаз',
    'Сессия-депрессия',
    'Сопромат @^%#!',
    'Семеновская',
    'Щас бы в дотку',
    'А где пара?',
    'Мне ко второй',
    'В другой корпус?',
    ')))',
    'О чем была пара?',
    'Да за ночь успею',
    'Че задали?',
    'Times New Roman, 14, 1.5',
    'Книжка',
    'Го в кефас',
    'Как препода зовут?',
    'В смысле уже завтра?',
    'Не опаздываю, а задерживаюсь',
]

const TEACHER_WORDS = [
    'Московский политехнический университет',
    'Личный кабинет',
    'Храм науки',
    'Образование',
    'Лекция',
    'Учебный материал',
    'Просвещение',
    'Знание-сила',
    'Учение-свет',
    'Гранит науки',
]

const ProfileTopPlate = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const background1 = getLettersColors(user?.fullName ?? '', 'main') ?? Colors.blue.dark1
    const background2 = getLettersColors(user?.fullName ?? '', 'main') ?? Colors.blue.dark2
    const wordsColor = getLettersColors(user?.fullName ?? '', 'dark3') ?? Colors.blue.dark3
    const words = user?.user_status === 'stud' ? STUDENT_WORDS : TEACHER_WORDS
    const shifts = Array(LINES)
        .fill(0)
        .map(() => Math.ceil(Math.random() * words.length))

    return (
        <ProfileTopPlateStyled background1={background1} background2={background2}>
            {shifts.map((shift, index) => {
                return (
                    <Line shift={shift} key={index}>
                        {shuffleArray(words).map((word) => {
                            return (
                                <Words key={`${word}1`} color={wordsColor}>
                                    {word}
                                </Words>
                            )
                        })}
                        {shuffleArray(words).map((word) => {
                            return (
                                <Words key={`${word}1`} color={wordsColor}>
                                    {word}
                                </Words>
                            )
                        })}
                        {shuffleArray(words).map((word) => {
                            return (
                                <Words key={`${word}1`} color={wordsColor}>
                                    {word}
                                </Words>
                            )
                        })}
                    </Line>
                )
            })}
        </ProfileTopPlateStyled>
    )
}

export default React.memo(ProfileTopPlate)
