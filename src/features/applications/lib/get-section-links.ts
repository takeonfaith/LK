import {
    ARBITRARY_REQUEST_ROUTE,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    SOCIAL_SCROLLARSHIP,
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
} from '@app/routes/routes'

const getSectionLinks = () => {
    return [
        {
            title: 'Многофункциональный центр',
            links: [
                {
                    link: CERTIFICATE_OF_ATTENDANCE,
                    title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)',
                },
                { link: SOCIAL_AGENCIES, title: 'Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)' },
                { link: PAPER_CALL, title: 'Справка-вызов' },
                { link: '/', title: 'Запрос на изменение персональных данных' },
                { link: '/', title: 'Запрос на восстановление магнитного пропуска' },
                { link: CLARIFICATION_OF_PASSPORT_DATA_ROUTE, title: 'Уточнение паспортных данных' },
                { link: '/', title: 'Заявка на комнату повышенной комфортности' },
            ],
        },
        {
            title: 'Профсоюзная организация',
            links: [
                { link: '/', title: 'Вступить в Профсоюз' },
                { link: '/', title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)' },
                { link: '/', title: 'Заявка на материальную помощь' },
                { link: SOCIAL_SCROLLARSHIP, title: 'Оформить социальную стипендию' },
                {
                    link: '/',
                    title: 'Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии',
                },
            ],
        },
        {
            title: 'Практика',
            links: [{ link: '/', title: 'Записаться на практику' }],
        },
        {
            title: 'Мобилизационный отдел',
            links: [
                { link: '/', title: 'Отправить документы воинского учета' },
                {
                    link: '/',
                    title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу',
                },
            ],
        },
        {
            title: 'Отдел платных образовательных услуг',
            links: [
                { link: '/', title: 'Оформить дополнительное соглашение к договору об обучении' },
                { link: '/', title: 'Отправить квитанцию об оплате обучения или пени' },
            ],
        },
        {
            title: 'Приемная комиссия',
            links: [
                {
                    link: '/',
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
            title: 'Управление студенческого городка',
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
