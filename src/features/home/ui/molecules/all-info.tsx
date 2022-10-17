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
        authorIDs,
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
                subdivisions?.map((t, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div style={{ marginTop: '5px' }}>
                                {t.subdivision && <div>Подразделение: {t.subdivision}</div>}
                                {t.post && <div>Должность: {t.post}</div>}
                                {t.wage && t.jobType && (
                                    <div>
                                        Ставка: {t.wage}; {t.jobType}
                                    </div>
                                )}
                            </div>
                            {index < subdivisions.length - 1 && <Divider />}
                        </React.Fragment>
                    )
                }),
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
            value: !!authorIDs && (
                <div style={{ marginTop: '5px' }}>
                    {authorIDs.wosReasearcher && <div>Web of Science Researcher ID: {authorIDs.wosReasearcher}</div>}
                    {authorIDs.scopus && <div>Scopus Author ID: {authorIDs.scopus}</div>}
                    {authorIDs.eLibrary && <div>eLibrary Author ID: {authorIDs.eLibrary}</div>}
                </div>
            ),
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
