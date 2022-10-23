import instructionsTeacherData from '@pages/instructions/data/teacher-data'
import HelpfulPages, { Link } from '../types/helpful-pages'

const pages: HelpfulPages = [
    [
        {
            title: 'Учёба',
            links: [
                {
                    title: 'Промежуточная аттестация',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf',
                },
                {
                    title: 'Информация об оплате обучения',
                    visible: 'all',
                    href: 'https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/',
                },
                {
                    title: 'Банковские реквизиты',
                    visible: 'student',
                    href: 'https://mospolytech.ru/ob-universitete/adresa-i-kontakty/uchetnaya-kartochka-i-bankovskie-rekvizity/',
                },
                { title: 'Международные программы', visible: 'student', href: 'https://mospolytech.ru/?id=8' },
                { title: 'Дополнительное образование', visible: 'student', href: 'https://mospolytech.ru/?id=92' },

                {
                    title: 'Электронная библиотека Московского Политеха',
                    visible: 'staff',
                    href: 'https://online.mospolytech.ru/course/view.php?id=7621',
                },
                {
                    title: 'Библиотечно-информационный центр',
                    visible: 'all',
                    href: 'https://new.mospolytech.ru/obuchauschimsya/biblioteka/',
                },
                {
                    title: 'Электронный каталог библиотеки Электростальского института',
                    visible: 'all',
                    href: 'http://lib.elpol.ru',
                },
                {
                    title: 'Образовательные программы',
                    visible: 'all',
                    href: 'https://mospolytech.ru/sveden/education/educationplan/',
                },
            ],
        },
        {
            title: 'Наука',
            links: [
                {
                    title: 'Анонсы научных мероприятий',
                    visible: 'all',
                    href: 'https://mospolytech.ru/nauchnaya-deyatelnost/obyavleniya/',
                },
                { title: 'Как получить патент', visible: 'all', href: '#' },
                {
                    title: 'Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации',
                    visible: 'all',
                    href: 'https://www.elsevier.com',
                },
                { title: 'Список низкорейтинговых журналов', visible: 'all', href: '#' },
                {
                    title: 'SciVal онлайн-платформа для мониторинга и анализа международных научных исследований',
                    visible: 'all',
                    href: 'https://www.scival.com/landing',
                },
                {
                    title: 'Студенческое научно-техническое общество',
                    visible: 'staff',
                    href: 'http://snto.mospolytech.ru',
                },
            ],
        },
        {
            title: 'Внеучебная деятельность',
            links: [
                {
                    title: 'Спортивная деятельность',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf',
                },
                { title: 'Расписание спортивных секций', visible: 'student', href: 'https://mospolytech.ru/?id=1482' },
                { title: 'Студенческая жизнь', visible: 'student', href: 'https://mospolytech.ru/?id=669' },
                { title: 'Профорганизация', visible: 'all', href: 'https://profkommospolytech.ru' },
                {
                    title: 'Студенческое научно-техническое общество',
                    visible: 'student',
                    href: 'http://snto.mospolytech.ru',
                },
                { title: 'Формула Студент', visible: 'all', href: 'http://fdr.mospolytech.ru' },
                {
                    title: 'Медицинское обслуживание',
                    visible: 'all',
                    href: 'https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/',
                },
                {
                    title: 'Центр подготовки водителей (автошкола)',
                    visible: 'student',
                    href: 'https://mospolytech.ru/dop-obrazovanie/avtoshkola/',
                },
                {
                    title: 'Яхт-клуб',
                    visible: 'all',
                    href: 'https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/yaht-klub/',
                },
                {
                    title: 'Многофункциональный центр',
                    visible: 'all',
                    href: 'https://mospolytech.ru/obuchauschimsya/mnogofunkcionalnyy-centr/',
                },
            ],
        },
    ],
    [
        {
            title: 'Безопасность',
            links: [
                {
                    title: 'Памятка «Подозрительный предмет или бесхозная вещь»',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_1_Podozritelnyj_predmet_ili_beshoznaya_vesch.pdf',
                    visible: 'all',
                },
                {
                    title: 'Если оказались на территории вуза в момент наступившей чрезвычайной ситуации',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf',
                    visible: 'all',
                },
                {
                    title: 'Памятка «Подозрительный предмет»',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf',
                    visible: 'all',
                },
                {
                    title: 'Памятка студента по действиям в экстремальных ситуациях',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf',
                    visible: 'all',
                },
                {
                    title: 'Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF',
                    visible: 'all',
                },
                {
                    title: 'Безопасность в экстремальных и чрезвычайных ситуациях',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF',
                    visible: 'all',
                },
                {
                    title: 'Как понять, что материал экстремистский, и что с этим делать',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF',
                    visible: 'all',
                },
                {
                    title: 'Последствия и ответственность за ложное сообщение об акте терроризма',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF',
                    visible: 'all',
                },
                {
                    title: 'Последствия участия в несогласованных митингах и протестных акциях',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF',
                    visible: 'all',
                },
                {
                    title: 'Признаки вербовки в экстремистскую организацию и как с этим справиться',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF',
                    visible: 'all',
                },
                {
                    title: 'Что делать, если вы обнаружили бесхозный предмет',
                    href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF',
                    visible: 'all',
                },
            ],
        },
    ],
    [
        {
            title: 'Инструкции',
            links: [
                {
                    title: 'Инструкция по получению логина и пароля единой учётной записи студентов первого курса',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/storage/files/stud_login_instruction.pdf?1',
                },
                {
                    title: 'Инструкции',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/index.php?p=instructions',
                },
                {
                    title: 'Где найти коворкинги - там есть WiFi, столы, пуфы и розетки',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf',
                },
                {
                    title: 'Инструкции по мобильному приложению',
                    visible: 'all',
                    href: 'https://e.mospolytech.ru/old/storage/files/MP_mobile_app_instruction.pdf',
                },

                ...instructionsTeacherData[0].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
            ],
        },
    ],
    [
        {
            title: 'Курсы',
            links: [
                {
                    title: 'Современного курсостроения',
                    visible: 'student',
                    href: 'https://project.lektorium.tv/howtomooc',
                },
            ],
        },
    ],
    [
        {
            title: 'Бланки документов',
            links: [
                {
                    title: 'Бланк квитанции оплаты за обучение',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/files/site/bill_edu2021.doc?1',
                },
                {
                    title: 'Бланк квитанции оплаты неустойки за обучение',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/files/site/bill_edu_penny2021.doc?1',
                },
                {
                    title: 'Бланк квитанции оплаты за общежитие',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/files/site/bill_hostel2021.doc?1',
                },
                {
                    title: 'Бланк квитанции оплаты неустойки за общежитие',
                    visible: 'student',
                    href: 'https://e.mospolytech.ru/old/files/site/bill_hostel_penny2021.doc?1',
                },
            ],
        },
    ],
    [
        {
            title: 'Положения',
            links: [...instructionsTeacherData[2].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' }))],
        },
    ],
    [
        {
            title: 'Приказы',
            links: [...instructionsTeacherData[1].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' }))],
        },
    ],
]

export default pages
