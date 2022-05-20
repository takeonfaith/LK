import { PAYMENTS_ROUTE } from '@app/routes/general-routes'
import { ARBITRARY_REQUEST_ROUTE } from '@app/routes/routes'
import { Message } from '@ui/message'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Ul = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export function HelpLinks() {
    return (
        <>
            <Message type="alert" title="Внимание!">
                Прежде, чем написать сообщение, убедитесь в том, что указанные ниже случаи не относятся к вашей
                проблеме:
            </Message>
            <Ul>
                <p>
                    Если у вас проблемы с системой <strong>LMS</strong> (не можете войти, не приходит ответ и т.п), а
                    также любые вопросы по дистанционному обучению - пишите на почту:{' '}
                    <a href="mailto:lms@mospolytech.ru">lms@mospolytech.ru</a>.
                </p>
                <p>
                    Если вы - <strong>АБИТУРИЕНТ</strong>, то вам по адресу:{' '}
                    <a href="https://lk.mospolytech.ru" target="_blank" rel="noreferrer">
                        lk.mospolytech.ru
                    </a>
                    .
                </p>
                <p>
                    Сотрудники университета и первокурсники получают доступ к личному кабинету через единую учетную
                    запись, которую получают в отделе технической поддержки (БС ауд. А-418, тел. 1111 или почта{' '}
                    <a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>).
                </p>
                <p>
                    <strong>Неточности в своих персональных данных</strong> (неправильные или отсутствующие ФИО, пол и
                    т.п.), а также <strong>успеваемости</strong>: обращайтесь в свое <strong>отделение ЦРС</strong>{' '}
                    лично или через произвольный запрос в разделе «
                    {<Link to={ARBITRARY_REQUEST_ROUTE}>Справки, заявления</Link>}».
                </p>
                <p>
                    <strong>Неправильные суммы в разделе</strong> «
                    {<Link to={PAYMENTS_ROUTE}>Сведения об оплатах</Link>}», отсутствует договор:{' '}
                    <strong>обратитесь в договорной отдел</strong>
                </p>
            </Ul>
        </>
    )
}
