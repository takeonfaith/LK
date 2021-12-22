import React, { memo } from 'react'
import { User } from '@api/model'
import transformSex from '@utils/transform-sex'

export default memo(AllInfo)

interface Props {
    user: User
}

function AllInfo({ user }: Props) {
    const {
        status,
        sex,
        birthday,
        code,
        faculty,
        course,
        group,
        specialty,
        specialization,
        degreeLength,
        educationForm,
        finance,
        degreeLevel,
        enterYear,
        subdivisions,
    } = user

    const items = [
        {
            key: 'Статус',
            value: status,
        },
        {
            key: 'Пол',
            value: transformSex(sex),
        },
        {
            key: 'Дата рождения',
            value: birthday,
        },
        {
            key: 'Код студента',
            value: code,
        },
        {
            key: 'Факультет',
            value: faculty,
        },
        {
            key: 'Курс',
            value: course,
        },
        {
            key: 'Группа',
            value: group,
        },
        {
            key: 'Специальность',
            value: specialty,
        },
        {
            key: 'Специализация',
            value: specialization,
        },
        {
            key: 'Срок обучения',
            value: degreeLength,
        },
        {
            key: 'Форма обучения',
            value: educationForm,
        },
        {
            key: 'Вид финансирования',
            value: finance,
        },
        {
            key: 'Сведения о трудоусторйстве',
            value: subdivisions?.map((t, index) => <div key={index}>{`${index + 1})${t.subdivision}`}</div>),
        },
        {
            key: 'Уровень образования',
            value: degreeLevel,
        },
        {
            key: 'Год набора',
            value: enterYear,
        },
    ]
    return (
        <div>
            {items.map(
                ({ key, value }) =>
                    !!value && (
                        <p key={key}>
                            <b>{key}:</b> {value}
                        </p>
                    ),
            )}
        </div>
    )
}
