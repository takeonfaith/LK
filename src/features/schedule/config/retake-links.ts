import { RetakeLink } from '../types/retake-types'

const RETAKE_LINKS: Record<string, RetakeLink> = {
    feiu: {
        fullTitle: 'Факультет экономики и управления',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FEU.zip?5',
        links: [],
    },
    fuigh: {
        fullTitle: 'Факультет урбанистики и городского хозяйства',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FUiGH.zip?1',
        links: [],
    },
    fbk: {
        fullTitle: 'Факультет базовых компетенций',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FBK.zip?8',
        links: [],
    },
    fhtib: {
        fullTitle: 'Факультет химической технологии и биотехнологии',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FHTiB.zip?2',
        links: [],
    },
    tf: {
        fullTitle: 'Транспортный факультет',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/TF.zip?7',
        links: [],
    },
    fm: {
        fullTitle: 'Факультет машиностроения',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FM.zip?6',
        links: [],
    },
    fit: {
        fullTitle: 'Факультет информационных технологий',
        links: [
            {
                title: 'ФИТ 2022-2023-зима, кафедра ИБ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IB.pdf',
            },
            {
                title: 'ФИТ 2022-2023-зима, кафедра ИКТ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IKT.pdf',
            },
            {
                title: 'ФИТ 2022-2023-зима, кафедра ПИ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_PI.pdf',
            },
            {
                title: 'ФИТ 2021-2022-лето, кафедра ИиИТ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IiIT.pdf',
            },
            {
                title: 'ФИТ 2021-2022-лето, кафедра ИиИТ, ВНЕШНИЕ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2022-2023-zima__kafedra_IiIT_VNEShNIE.pdf',
            },
        ],
        href: '',
    },
    pi: {
        fullTitle: 'Полиграфический институт',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/PI.zip?4',
        links: [],
    },
    iidizh: {
        fullTitle: 'Институт издательского дела и журналистики',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/IIDiZh.zip?2',
        links: [],
    },
    igrik: {
        fullTitle: 'Институт графики и искусства книги имени В.А.Фаворского',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/IGRIK.zip?2',
        links: [],
    },
    pishe: {
        fullTitle: 'Передовая инженерная школа электротранспорта',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/PIShE.zip',
        links: [],
    },
    cpd: {
        fullTitle: 'Центр проектной деятельности',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/TsPD.zip?3',
        links: [],
    },
    nid: {
        fullTitle: 'График приема задолженностей по НИД (аспиранты)',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/Grafik_priema_zadolzhennostej_po_NID_(aspiranty).doc',
        links: [],
    },
}

export default RETAKE_LINKS
