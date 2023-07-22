import {
    ARBITRARY_REQUEST,
    BUFFER_DISMISSAL,
    // BUFFER_EXTRA_HOLIDAY_COLL,
    BUFFER_HOLIDAY_PLANNING,
    BUFFER_HOLIDAY_TRANSFER,
    BUFFER_HOLIDAY_WORK,
    BUFFER_MEDICAL_EXAMINATION,
    // BUFFER_HOLIDAY_POSTPONED,
    BUFFER_WORK_TRANSFER,
    CERTIFICATE_FROM_PLACE_OF_WORK,
    CERTIFICATE_OF_WORK_EXPERIENCE,
    CERTIFICATE_TIME_PARENTAL_LEAVE,
    CONNECTING_COMPUTER,
    CONTACT_INFO_ACTUALIZATION,
    COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
    COPY_OF_EMPLOYMENT_RECORD,
    COURIER,
    DATA_VERIFICATION_ROUTE,
    GETTING_COMPUTER_EQUIPMENT,
    ISSUANCE_OF_LICENSES,
    NUMBER_OF_UNUSED_VACATION_DAYS,
    OTHER_IT_SERVICES,
    PARTTIME_EMPLOYMENT,
    PAYMENT_FOR_CHILD_CARE,
    PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
    PERSONA_INCOME_TAX_REFERENCE,
    PRINTER_MAINTENANCE,
    QUESTION_PERSONAL_ACCOUNT,
    QUESTION_SED,
    VISA_CERTIFICATE,
    WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
} from '@app/routes/teacher-routes'
import { UNION_ORGANIZATION } from '@consts'

const getTeachersSectionLinks = () => {
    return [
        {
            title: 'Цифровые сервисы',
            links: [
                { link: CONTACT_INFO_ACTUALIZATION, title: 'Актуализация контактных данных' },
                { link: DATA_VERIFICATION_ROUTE, title: 'Анкета для сверки данных' },
                { link: ISSUANCE_OF_LICENSES, title: 'Выдача лицензий и свидетельств о государственной аккредитации' },
                { link: GETTING_COMPUTER_EQUIPMENT, title: 'Получение нового компьютерного оборудования' },
                { link: CONNECTING_COMPUTER, title: 'Подключение компьютера, МФУ, телефона, WiFi' },
                { link: PRINTER_MAINTENANCE, title: 'Обслуживание принтеров, МФУ' },
                { link: QUESTION_SED, title: 'Вопрос по СЭД Directum и 1С' },
                { link: QUESTION_PERSONAL_ACCOUNT, title: 'Вопрос по Личному кабинету' },
                { link: OTHER_IT_SERVICES, title: 'Прочее ИТ-обслуживание' },
                { link: CERTIFICATE_FROM_PLACE_OF_WORK, title: 'Справка с места работы' },
                { link: VISA_CERTIFICATE, title: 'Справка на визу' },
                { link: CERTIFICATE_OF_WORK_EXPERIENCE, title: 'Справка о стаже работы' },
                { link: NUMBER_OF_UNUSED_VACATION_DAYS, title: 'Справка о количестве неиспользованных дней отпуска' },
                { link: COPY_OF_EMPLOYMENT_RECORD, title: 'Копия трудовой книжки' },
                { link: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE, title: 'Копии документов из личного дела' },
                {
                    link: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
                    title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
                },
                {
                    link: CERTIFICATE_TIME_PARENTAL_LEAVE,
                    title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
                },
                { link: PERSONA_INCOME_TAX_REFERENCE, title: 'Справка по форме 2-НДФЛ' },
                {
                    link: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
                    title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
                },
                {
                    link: PAYMENT_FOR_CHILD_CARE,
                    title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
                },
            ],
        },
        {
            title: 'Прочее',
            links: [
                {
                    link: ARBITRARY_REQUEST,
                    title: 'Произвольный запрос',
                },
                {
                    link: UNION_ORGANIZATION,
                    title: 'Вступить в Профсоюз',
                    isExternalLink: true,
                },
            ],
        },
        {
            title: 'Экспедиция отдела контроля и делопроизводства',
            links: [{ link: COURIER, title: 'Курьер' }],
        },
    ]
}
const getTeachersHRSectionLinks = () => {
    return [
        {
            title: '',
            links: [
                //{ link: PARTTIME_EMPLOYMENT, title: 'Заявление на трудоустройство по совместительству' },
                //{ link: HOLIDAY_POSTPONED, title: 'Заявление на перенос отпуска' },
                { link: PARTTIME_EMPLOYMENT, title: 'Заявление на трудоустройство по совместительству' },
                // { link: BUFFER_HOLIDAY_POSTPONED, title: 'Заявление на перенос отпуска' },
                { link: BUFFER_DISMISSAL, title: 'Заявление на увольнение' },
                { link: BUFFER_HOLIDAY_WORK, title: 'Заявление о привлечении к работе в выходной день' },
                { link: BUFFER_HOLIDAY_PLANNING, title: 'Заявление о предоставлении отпуска' },
                { link: BUFFER_HOLIDAY_TRANSFER, title: 'Заявление о переносе отпуска' },
                { link: BUFFER_MEDICAL_EXAMINATION, title: 'Заявление о диспансеризации' },
                { link: BUFFER_WORK_TRANSFER, title: 'Заявление на перевод' },
                // {
                //     link: BUFFER_EXTRA_HOLIDAY_COLL,
                //     title: 'Заявление о предоставлении дополнительного отпуска по коллективному договору',
                // },
                // { link: DISMISSAL, title: 'Заявление на увольнение' },
                //{ link: HOLIDAY_WORK, title: 'Заявление о привлечении к работе в выходной день' },
                // { link: HOLIDAY_PLANNING, title: 'Заявление о предоставлении отпуска' },
                //{ link: WORK_TRANSFER, title: 'Заявление на перевод' },
                // {
                //     link: EXTRA_HOLIDAY_COLL,
                //     title: 'Заявление о предоставлении дополнительного отпуска по коллективному договору',
                // },
            ],
        },
    ]
}
export { getTeachersSectionLinks, getTeachersHRSectionLinks }
