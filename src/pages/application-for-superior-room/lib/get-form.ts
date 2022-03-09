import { User } from '@api/model'
import createFullName from '@features/home/lib/create-full-name'
import { IInputArea } from '@ui/input-area/model'

const allocationTypes = [
    { id: 0, title: 'Один в комнате' },
    { id: 1, title: 'Двое в комнате' },
    { id: 2, title: 'Один в блоке' },
]

const dormLocations = [
    { id: 0, title: 'ул. Михалковская, д. 7, корп. 3' },
    { id: 1, title: 'ул. Малая Семеновская, д. 12' },
]

const extracurricularActivities = [
    {
        id: 0,
        title: 'Общественная',
    },
    {
        id: 1,
        title: 'Научная',
    },
    {
        id: 2,
        title: 'Спортивная',
    },
    {
        id: 3,
        title: 'Творческая',
    },
]

const getForm = (user: User): IInputArea => {
    const { name, surname, patronymic } = user
    return {
        title: 'Заявка на комнату повышенной комфортности',
        data: [
            {
                title: 'ФИО',
                value: createFullName({ name, surname, patronymic }),
                fieldName: '',
                width: '100%',
                editable: false,
            },
            { title: 'Телефон', value: '', fieldName: '', type: 'tel', width: '100%', editable: true, required: true },
            { title: 'Email', value: '', fieldName: '', type: 'email', width: '100%', editable: true, required: true },
            {
                title: 'Приоритетный тип размещения',
                value: allocationTypes[0],
                fieldName: '',
                type: 'select',
                items: allocationTypes,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес общежития',
                value: dormLocations[0],
                fieldName: '',
                type: 'select',
                items: dormLocations,
                width: '100%',
                editable: true,
            },
            {
                title: 'Участие во внеучебной деятельности',
                value: [extracurricularActivities[0]],
                fieldName: '',
                type: 'multiselect',
                items: extracurricularActivities,
                width: '100%',
                editable: true,
            },
            { title: 'Дополнительная информация', value: '', fieldName: '', type: 'textarea', editable: true },
        ],
        hint: 'Загрузите документы(допускаются файлы pdf размером не больше 10мб каждый',
        optionalCheckbox: { title: 'С приказом об оплате ознакомлен', value: false, fieldName: '' },
        documents: { files: [], required: true, maxFiles: 10, fieldName: '' },
    }
}

export default getForm
