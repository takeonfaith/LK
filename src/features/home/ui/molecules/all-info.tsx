import React, { memo } from 'react'
import { User } from '@api/model'
import transformSex from '@utils/transform-sex'
import KeyValue from '@ui/atoms/key-value'
import { Divider } from '@ui/divider'

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
            key: 'Направление',
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
            key: 'Сведения о трудоустройстве',
            value:
                !!subdivisions?.length &&
                subdivisions?.map((t, index) => (
                    <React.Fragment key={index}>
                        <div style={{ marginTop: '5px' }}>
                            {`${index + 1}) ${t.subdivision}`}
                            <div>Должность: {t.jobType}</div>
                            <div>Ставка: {t.wage}</div>
                        </div>
                        {index < subdivisions.length - 1 && <Divider />}
                    </React.Fragment>
                )),
        },
        {
            key: 'Уровень образования',
            value: degreeLevel,
        },
        {
            key: 'Год набора',
            value: enterYear,
        },
        {
            key: 'Авторские идентификаторы',
            value: null,
        },
    ]

    return (
        <div>
            {items.map(
                ({ key, value }) =>
                    !!value && (
                        <KeyValue
                            keyStr={key}
                            value={value}
                            key={key}
                            direction={typeof value === 'object' ? 'vertical' : 'horizontal'}
                        />
                    ),
            )}
        </div>
    )
}
