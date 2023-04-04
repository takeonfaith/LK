import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Контактная информация',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: phone,
                editable: true,
                required: true,
            },
        ],
        links: [
            {
                title: 'Согласие на обработку моих персональных данных',
                link: 'https://e.mospolytech.ru/old/storage/files/Form_17_PD_2022.DOC',
                type: 'document',
            },
            {
                title: 'Согласие на обработку персональных данных членов моей семьи',
                link: 'https://e.mospolytech.ru/old/storage/files/PD_agreement_minor.docx',
                type: 'document',
            },
        ],
        optionalCheckbox: {
            title: `Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107`,
            value: false,
            fieldName: 'isCorrectRegistration',
            editable: true,
        },
    }
}

export default getForm
