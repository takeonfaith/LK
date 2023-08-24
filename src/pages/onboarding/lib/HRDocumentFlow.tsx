import { APPLICATIONS_ROUTE, HR_APPLICATIONS_ROUTE } from '@app/routes/teacher-routes'
import React from 'react'
import { Link } from 'react-router-dom'
import { ScheduleTable } from '../ui/molecules/ScheduleTable'

export const HRDocumentFlow = (
    <>
        <p>
            Для оформления кадровых заявлений перейдите в раздел{' '}
            <Link to={HR_APPLICATIONS_ROUTE}>«Кадровые заявления»</Link> или обратитесь в Отдел кадров университета.
            По всем дополнительным вопросам, связанным с работой, также обращайтесь в Отдел кадров университета.
        </p>
        <ScheduleTable
            title="Приемные часы и контакты Отдела кадров:"
            content={{
                'Понедельник - Вторник': '10:30-17:00',
                Среда: 'неприемный день',
                Четверг: '10:30-17:00',
                Пятница: '10:30- 16:00',
                'Обеденный перерыв': '13:00- 13:45',
                'Суббота, Воскресенье': 'Выходной',
            }}
        />
        <p>
            Для подачи заявления на выдачу документов, связанных с работой, а также справок, связанных с выплатой
            заработной платы, перейдите в раздел <Link to={APPLICATIONS_ROUTE}>«Цифровые сервисы»</Link> или обратитесь
            в одно из отделений{' '}
            <a href="https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/" target="_blank" rel="noreferrer">
                Многофункционального центра университета (МФЦ)
            </a>
            .
        </p>
    </>
)
