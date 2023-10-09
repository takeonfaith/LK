import { SelectPage } from '@features/select'
import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const SELECT_FIELD_OF_ACTIVITY: SelectPage[] = [
    { id: '1', title: 'Банковская сфера' },
    { id: '2', title: 'Биотехнология' },
    { id: '3', title: 'Городское хозяйство, ЖКХ' },
    { id: '4', title: 'Государственная служба' },
    { id: '5', title: 'Дизайн, графика, живопись' },
    { id: '6', title: 'Добывающая отрасль, нефть, газ' },
    { id: '7', title: 'Журналистика и СМИ' },
    { id: '8', title: 'Издательское дело' },
    { id: '9', title: 'IT-сфера' },
    { id: '10', title: 'Металлургия, металлообработка' },
    { id: '11', title: 'Полиграфическое и упаковочное производство' },
    { id: '12', title: 'Продажи' },
    { id: '13', title: 'Строительство, эксплуатация зданий и сооружений, проектирование' },
    { id: '14', title: 'Машиностроение' },
    { id: '15', title: 'Наука, образование' },
    { id: '16', title: 'Транспорт' },
    { id: '17', title: 'Химическое производство' },
    { id: '18', title: 'Экология и природопользование' },
    { id: '19', title: 'Электроника, приборостроение' },
    { id: '20', title: 'Энергетика' },
    { id: '21', title: 'Другое (строка для заполнения)' },
]

const SELECT_SALARY: SelectPage[] = [
    { id: '1', title: 'До 30 тыс. рублей' },
    { id: '2', title: '30 – 50 тыс. рублей' },
    { id: '3', title: '50 – 70 тыс. рублей' },
    { id: '4', title: '70 – 100 тыс. рублей' },
    { id: '5', title: 'Более 100 тыс. рублей' },
]

const SELECT_NUM_OF_EMPLOYEES: SelectPage[] = [
    { id: '1', title: 'Менее 100 человек' },
    { id: '2', title: '100 – 250 человек' },
    { id: '3', title: '251 - 1000 человек' },
    { id: '4', title: '1001 – 5000 человек' },
    { id: '5', title: 'Более 5000 человек' },
]

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Трудоустройство',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Трудоустроены ли Вы в настоящее время?',
                type: 'radio',
                fieldName: 'currently-employed',
                value: null,
                editable: true,
                required: true,
                isSpecificRadio: true,
                items: [
                    {
                        id: 0,
                        title: 'Да',
                    },
                    {
                        id: 1,
                        title: 'Нет',
                    },
                ],
            },
            {
                title: 'Требуется ли Вам содействие в поиске места трудоустройства?',
                type: 'radio',
                fieldName: 'need_employment_help',
                value: null,
                editable: true,
                required: true,
                isSpecificRadio: true,
                items: [
                    {
                        id: 0,
                        title: 'Да',
                    },
                    {
                        id: 1,
                        title: 'Нет',
                    },
                ],
                specialType: 'unemployed',
            },
            {
                title: 'Укажите наименование организации, в которой Вы трудоустроены (например, ООО «Ромашка»)',
                fieldName: 'org_name',
                value: '',
                editable: true,
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Укажите занимаемую должность',
                fieldName: 'job_title',
                value: '',
                editable: true,
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Вы работаете по специальности, получаемой в университете?',
                type: 'radio',
                fieldName: 'work_in_university',
                value: null,
                editable: true,
                required: true,
                isSpecificRadio: true,
                items: [
                    {
                        id: 0,
                        title: 'Да',
                    },
                    {
                        id: 1,
                        title: 'Нет',
                    },
                ],
                specialType: 'employed',
            },
            {
                fieldName: 'additional_info',
                title: 'Дополнительная информация о месте трудоустройства',
                type: 'text-header',
                visible: true,
                value: 'Дополнительная информация о месте трудоустройства',
                specialType: 'employed',
            },
            {
                title: 'Являетесь ли Вы самозанятым или индивидуальным предпринимателем?',
                type: 'radio',
                fieldName: 'self-employed-or-individual-entrepreneur',
                value: null,
                editable: true,
                required: true,
                isSpecificRadio: true,
                items: [
                    {
                        id: 0,
                        title: 'Да',
                    },
                    {
                        id: 1,
                        title: 'Нет',
                    },
                ],
                specialType: 'employed',
            },
            {
                title: 'Входит ли организация, в которой вы трудоустроены в ОПК (оборонно-промышленный комплекс)?',
                type: 'radio',
                fieldName: 'mic',
                value: null,
                editable: true,
                required: true,
                isSpecificRadio: true,
                items: [
                    {
                        id: 0,
                        title: 'Да',
                    },
                    {
                        id: 1,
                        title: 'Нет',
                    },
                ],
                specialType: 'employed',
            },
            {
                title: 'Укажите адрес организации',
                fieldName: 'org_address',
                value: '',
                editable: true,
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Телефон организации',
                type: 'tel',
                mask: true,
                fieldName: 'org_phone',
                editable: true,
                required: true,
                value: '',
                specialType: 'employed',
            },
            {
                title: 'Электронная почта организации',
                type: 'email',
                fieldName: 'org_email',
                value: '',
                editable: true,
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Укажите сферу деятельности организации, в которой Вы трудоустроены',
                type: 'select',
                width: '100%',
                value: null,
                items: SELECT_FIELD_OF_ACTIVITY,
                fieldName: 'theme',
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Укажите диапазон Вашей среднемесячной заработной платы? ',
                type: 'select',
                width: '100%',
                value: null,
                items: SELECT_SALARY,
                fieldName: 'theme',
                required: true,
                specialType: 'employed',
            },
            {
                title: 'Укажите численность работников организации, в которой Вы работаете?',
                type: 'select',
                width: '100%',
                value: null,
                items: SELECT_NUM_OF_EMPLOYEES,
                fieldName: 'theme',
                required: true,
                specialType: 'employed',
            },
        ],
    }
}
