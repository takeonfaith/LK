import React from 'react'
import { BoldText } from '@shared/ui/atoms/BoldText'
import { Contacts } from './contacts'

export const WorkplaceOrganization = () => (
    <>
        <p>
            Для получения доступа к внутренним системам Московского Политеха направьте письмо на электронный адрес{' '}
            <a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a> c указанием следующей информации:
            <br />
            <BoldText>Тема письма:</BoldText> Доступ к внутренним системам университета
            <br />
            <BoldText style={{ fontWeight: 'bold' }}>Содержание:</BoldText> Указать необходимые системы, ФИО, должность,
            подразделение
        </p>
        <p>
            При осуществлении внутренней и внешней переписки посредством электронной почты, связанной с деятельностью
            университета, все работники обязаны использовать корпоративную электронную почту.
        </p>
        <Contacts>
            По всем дополнительным вопросам, связанным с обеспечением технической поддержки на рабочем месте, обращаться
            по телефону <a href="tel:+74952230523p1111">+7 (495) 223-05-23 доб. 1111</a> или на адрес электронной почты{' '}
            <a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>.
        </Contacts>
    </>
)
