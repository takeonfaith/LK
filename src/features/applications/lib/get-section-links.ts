import {
    ARBITRARY_REQUEST_ROUTE,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    SOCIAL_SCOLLARSHIP,
    PAPER_CALL,
    CERTIFICATE_OF_ATTENDANCE,
    SOCIAL_AGENCIES,
    REGULAR_ACCOMMODATION,
    ACCOMMODATION_CORRESPONDENCE_FORM,
    ACADEMIC_LEAVE_ACCOMMODATION,
    PREFERENTIAL_ACCOMMODATION,
    FAMILY_ROOM,
    TERMINATION_OF_EMPLOYMENT_CONTRACT,
    RELOCATION_TO_ANOTHER_HOSTEL,
    RELOCATION_INSIDE_HOSTEL,
    PAYMENT_RECIPIENT,
    MILITARY_REGISTRATION_DOCUMENTS,
    RETAKE_FOR_DIPLOMA,
    INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
    RESTORING_THE_MAGNETIC_PASS,
    FINANCIAL_ASSISTANCE,
    FINANCIAL_SUPPORT,
    CHANGING_PERSONAL_DATA,
    STATE_ACCREDITATION,
    STUDENT_STATUS,
} from '@app/routes/routes'
import { RECEPTION_COMMISSION, UNION_ORGANIZATION } from '@consts'

const getSectionLinks = () => {
    return [
        {
            title: 'Многофункциональный центр',
            links: [
                {
                    link: CERTIFICATE_OF_ATTENDANCE,
                    title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)',
                },
                {
                    link: STUDENT_STATUS,
                    title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
                },
                { link: SOCIAL_AGENCIES, title: 'Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)' },
                { link: PAPER_CALL, title: 'Справка-вызов' },
                { link: RETAKE_FOR_DIPLOMA, title: 'Заявление на пересдачу для получения диплома с отличием' },
                { link: CHANGING_PERSONAL_DATA, title: 'Запрос на изменение персональных данных' },
                { link: RESTORING_THE_MAGNETIC_PASS, title: 'Запрос на восстановление магнитного пропуска' },
                { link: CLARIFICATION_OF_PASSPORT_DATA_ROUTE, title: 'Уточнение паспортных данных' },
                { link: STATE_ACCREDITATION, title: 'Выдача лицензий и свидетельств о государственной аккредитации' },
            ],
        },
        {
            title: 'Профсоюзная организация',
            links: [
                {
                    link: UNION_ORGANIZATION,
                    title: 'Вступить в Профсоюз',
                    isExternalLink: true,
                    isOpenInNewWindow: true,
                },
                {
                    link: FINANCIAL_SUPPORT,
                    title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
                },
                { link: FINANCIAL_ASSISTANCE, title: 'Заявка на материальную помощь' },
                { link: SOCIAL_SCOLLARSHIP, title: 'Оформить социальную стипендию' },
                {
                    link: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
                    title: 'Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии',
                },
            ],
        },
        {
            title: 'Мобилизационный отдел',
            links: [
                { link: MILITARY_REGISTRATION_DOCUMENTS, title: 'Отправить документы воинского учета' },
                {
                    link: '',
                    title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу',
                },
            ],
        },
        {
            title: 'Отдел платных образовательных услуг',
            links: [
                { link: PAYMENT_RECIPIENT, title: 'Оформить дополнительное соглашение к договору об обучении' },
                { link: PAYMENT_RECIPIENT, title: 'Отправить квитанцию об оплате обучения или пени' },
            ],
        },
        {
            title: 'Приемная комиссия',
            links: [
                {
                    link: RECEPTION_COMMISSION,
                    isExternalLink: true,
                    title: ' Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное',
                },
            ],
        },
        {
            title: 'Прочее',
            links: [
                {
                    link: ARBITRARY_REQUEST_ROUTE,
                    title: ' Произвольный запрос',
                },
            ],
        },
        {
            title: 'Управление студенческим городком',
            links: [
                {
                    link: REGULAR_ACCOMMODATION,
                    title: 'Предоставление права проживания (очная и очно-заочная форма)',
                },
                {
                    link: ACCOMMODATION_CORRESPONDENCE_FORM,
                    title: 'Предоставление права проживания (заочная форма)',
                },
                {
                    link: ACADEMIC_LEAVE_ACCOMMODATION,
                    title: 'Предоставление права проживания в период академического отпуска',
                },
                {
                    link: PREFERENTIAL_ACCOMMODATION,
                    title: 'Предоставление права льготного проживания',
                },
                {
                    link: FAMILY_ROOM,
                    title: 'Предоставление права проживания в семейной комнате',
                },
                {
                    link: TERMINATION_OF_EMPLOYMENT_CONTRACT,
                    title: 'Расторжение договора найма',
                },
                {
                    link: RELOCATION_INSIDE_HOSTEL,
                    title: 'Переселение внутри общежития',
                },
                {
                    link: RELOCATION_TO_ANOTHER_HOSTEL,
                    title: 'Переселение в другое общежитие',
                },
            ],
        },
    ]
}

export default getSectionLinks
