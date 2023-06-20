import instructionsTeacherData from '@pages/instructions/data/teacher-data'
import { HelpfulInfoEnum, helpfulInfoName } from '@entities/useful-information'
import { HelpfulPages, Link } from '../types/helpful-pages'

const pages: HelpfulPages = [
    {
        id: HelpfulInfoEnum.information,
        title: helpfulInfoName[HelpfulInfoEnum.information],
        visible: 'all',
        content: [
            {
                title: 'Учёба',
                links: [
                    {
                        title: 'Промежуточная аттестация',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf',
                    },
                    {
                        title: 'Оплата обучения',
                        visible: 'student',
                        href: 'https://mospolytech.ru/obuchauschimsya/oplata-obucheniya/?sphrase_id=311027',
                    },
                    {
                        title: 'Программы дополнительного профессионального образования',
                        visible: 'all',
                        href: 'https://study.mospolytech.ru/dpo',
                    },
                    {
                        title: 'Международные программы',
                        visible: 'student',
                        href: 'https://mospolytech.ru/mejdunarodnaya-deyatelnost/mezhdunarodnye-stazhirovki/',
                    },
                    {
                        title: 'Дополнительное образование',
                        visible: 'student',
                        href: 'https://mospolytech.ru/dop-obrazovanie/povyshenie-kvalifikacii-i-professionalnaya-perepodgotovka/',
                    },

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
                title: 'Общежития',
                links: [
                    {
                        title: 'Правила внутреннего распорядка в студенческом городке',
                        visible: 'all',
                        href: 'https://mospolytech.ru/upload/medialibrary/c01/Pravila-vnutrennego-rasporyadka-v-studencheskom-gorodke-Moskovskogo-Polytecha-(23092022).pdf',
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
                    {
                        title: 'Как получить патент',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/Uvedomlenie_o_sozdanii_RID_(standartnoe).docx',
                    },
                    {
                        title: 'Рекомендации по использованию Scopus для подготовки отчетности о результатах публикационной активности организации',
                        visible: 'all',
                        href: 'https://www.elsevier.com',
                    },
                    {
                        title: 'Список низкорейтинговых журналов',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/Discontinued-sources-from-Scopus.xlsx',
                    },
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
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/sportivnaya-deyatelnost/',
                    },
                    {
                        title: 'Расписание спортивных секций',
                        visible: 'student',
                        href: 'https://e.mospolytech.ru/old/storage/files/Sportivnye_Sektsii_Mospoliteha.pdf',
                    },
                    {
                        title: 'Студенческая жизнь',
                        visible: 'student',
                        href: 'https://mospolytech.ru/studencheskaya-zhizn/o-studencheskoy-jizni/?sphrase_id=311039',
                    },
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
    },
    {
        id: HelpfulInfoEnum.security,
        title: helpfulInfoName[HelpfulInfoEnum.security],
        visible: 'all',
        content: [
            {
                title: 'Безопасность',
                links: [
                    {
                        title: 'Если оказались на территории вуза в момент наступившей чрезвычайной ситуации',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_2_Esli_okazalis_na_territorii_vuza_v_moment_nastupivshej_chrezvychajnoj_situatsii.pdf',
                    },
                    {
                        title: 'Памятка «Подозрительный предмет»',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_3_Podozritelnyj_predmet.pdf',
                    },
                    {
                        title: 'Памятка студента по действиям в экстремальных ситуациях',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_4_Pamyatka_studenta_po_dejstviyam_v_ekstremalnyh_situatsiyah.pdf',
                    },
                    {
                        title: 'Алгоритм действий при возникновении паники в толпе или в месте массового пребывания людей',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_5_Algoritm_dejstvij_pri_vozniknovenii_paniki_v_tolpe_ili_v_meste_massovogo_prebyvaniya_ljudej.PDF',
                    },
                    {
                        title: 'Безопасность в экстремальных и чрезвычайных ситуациях',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_6_Bezopasnost_v_ekstremalnyh_i_chrezvychajnyh_situatsiyah.PDF',
                    },
                    {
                        title: 'Как понять, что материал экстремистский, и что с этим делать',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_7_Kak_ponyat__chto_material_ekstremistskij__i_chto_s_etim_delat.PDF',
                    },
                    {
                        title: 'Последствия и ответственность за ложное сообщение об акте терроризма',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_8_Posledstviya_i_otvetstvennost_za_lozhnoe_soobschenie_ob_akte_terrorizma.PDF',
                    },
                    {
                        title: 'Последствия участия в несогласованных митингах и протестных акциях',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_9_Posledstviya_uchastiya_v_nesoglasovannyh_mitingah_i_protestnyh_aktsiyah.PDF',
                    },
                    {
                        title: 'Признаки вербовки в экстремистскую организацию и как с этим справиться',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_10_Priznaki_verbovki_v_ekstremistskuju_organizatsiju_i_kak_s_etim_spravitsya.PDF',
                    },
                    {
                        title: 'Что делать, если вы обнаружили бесхозный предмет',
                        visible: 'all',
                        href: 'https://e.mospolytech.ru/old/storage/files/notes/Metodicheskie_ukazaniya_i_pamyatki_11_Chto_delat__esli_vy_obnaruzhili_beshoznyj_predmet.PDF',
                    },
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.instructions,
        title: helpfulInfoName[HelpfulInfoEnum.instructions],
        visible: 'all',
        content: [
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

                    ...instructionsTeacherData[0].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.regulations,
        title: helpfulInfoName[HelpfulInfoEnum.regulations],
        visible: 'staff',
        content: [
            {
                title: 'Положения',
                links: [
                    ...instructionsTeacherData[2].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.orders,
        title: helpfulInfoName[HelpfulInfoEnum.orders],
        visible: 'staff',
        content: [
            {
                title: 'Приказы',
                links: [
                    ...instructionsTeacherData[1].links.map((l): Link => ({ ...l, href: l.link, visible: 'staff' })),
                ],
            },
        ],
    },
    {
        id: HelpfulInfoEnum.courses,
        title: helpfulInfoName[HelpfulInfoEnum.courses],
        visible: 'student',
        content: [
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
    },
]

export default pages
