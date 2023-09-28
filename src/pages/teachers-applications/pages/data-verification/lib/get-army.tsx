import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'
import converMilliseconds from '@shared/lib/dates/convert-milliseconds'
import React from 'react'

const getArmy = (data: TeacherDataVerification, isDone: boolean): IInputArea => {
    const isMale = data.sex === 'Мужской'
    const age = converMilliseconds(new Date().getTime() - new Date(data.bdate).getTime()).year

    return {
        title: 'Воинская служба',
        hint: (
            <>
                При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц
                документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).
                <br />
                <br />
                Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером.
            </>
        ),
        data: [],
        documents: {
            files: [],
            required: true,
            checkboxCondition: 'reverse',
            fieldName: 'armyFiles',
            maxFiles: 10,
        },
        optionalCheckbox: {
            fieldName: 'army_doc_none',
            title: 'Документ о воинской службе отсутствует',
            value: age >= 66 ? true : !isMale && data?.army_doc_none,
            required: true,
            visible: !isMale || age >= 66,
        },
        confirmed: isDone,
    }
}

export default getArmy
