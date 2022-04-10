import {
    ARBITRARY_REQUEST_ROUTE,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    SOCIAL_SCROLLARSHIP,
    PAPER_CALL,
    CERTIFICATE_OF_ATTENDANCE,
    SOCIAL_AGENCIES,
    PERSONAL_DATA,
    MAGNET_RECOVERY,
    MILITARY_REGISTRATION,
    FINANCIAL_ASSISTANCE,
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
                { link: PERSONAL_DATA, title: 'Запрос на изменение персональных данных' },
                { link: MAGNET_RECOVERY, title: 'Запрос на восстановление магнитного пропуска' },
                { link: CLARIFICATION_OF_PASSPORT_DATA_ROUTE, title: 'Уточнение паспортных данных' },
                { link: '/', title: 'Заявка на комнату повышенной комфортности' },
            ],
        },
        {
            title: 'Профсоюзная организация',
            links: [
                { link: '/', title: 'Вступить в Профсоюз' },
                { link: '/', title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)' },
                { link: FINANCIAL_ASSISTANCE, title: 'Заявка на материальную помощь' },
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
                { link: MILITARY_REGISTRATION, title: 'Отправить документы воинского учета' },
                {
                    link: '/',
                    title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу',
                },
            ],
        },
        {
            title: ' Отдел платных образовательных услуг',
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
    ]
}

export default getSectionLinks
