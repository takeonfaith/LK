import { OLD_LK_URL } from '@shared/constants'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { InstructionsType } from './student-data'

const instructionsTeacherData: InstructionsType[] = [
    {
        title: 'Инструкции',
        links: [
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_po_podkljucheniju_k_VPN.pdf',
                title: 'Как самостоятельно подключиться к VPN',
                icon: 'https://icon-library.com/images/vpn-icon-png/vpn-icon-png-18.jpg',
            },
            {
                link: OLD_LK_URL + '/storage/files/Osnaschenie_auditorij_Wi-Fi_i_proektorami.pdf',
                title: 'Сведения об оснащении аудиторий проекторами и WiFi',
                icon: 'https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf',
                title: 'КАК СДЕЛАТЬ ВИДЕОЗАПИСЬ ЭКЗАМЕНА (WEBEX, TEAMS)',
                icon: 'https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati.pdf',
                title: 'Как использовать сервис печати',
                icon: 'https://freeiconshop.com/wp-content/uploads/edd/print-flat.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf',
                title: 'Как подключиться к WiFi в аудитории',
                icon: 'https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_dlya_podkljucheniya_k_proektoru_.pdf',
                title: 'Как подключиться к проектору',
                icon: 'https://freeiconshop.com/wp-content/uploads/edd/print-flat.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Instruktsiya_po_zapolneniju_sposoba_distantsionnogo_provedeniya_zanyatij_v3.pdf',
                title: 'Как внести webinar в расписание',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_po_obnovleniju_kontaktnyh_dannyh_prepodavatelej.pdf',
                title: 'Как изменить контакты ППС в расписании',
                icon: 'https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png',
            },
            {
                link: 'https://online.mospolytech.ru/enrol/index.php?id=44',
                title: 'Как пользоваться курсом в LMS',
                icon: 'https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico',
            },
            {
                link: 'https://online.mospolytech.ru/enrol/index.php?id=44',
                title: 'Как дать доступ студентам на курс в LMS',
                icon: 'https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Dostup_rabotnikov_k_oblachnym_servisam_Microsoft.pdf?1',
                title: 'Доступ к облачным сервисам Microsoft',
                icon: 'https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Rabota_PPS_v_Microsoft_Teams.pdf?1',
                title: 'Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы',
                icon: 'https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Ispolzovanie_rabotnikami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1',
                title: 'Доступ к Microsoft OneDrive для работников и обучающихся Московского Политеха',
                icon: 'https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png',
            },
            {
                link: 'https://webinar.ru/blog/wp-content/uploads/2020/08/Metodichka_Webinar_na_200.pdf',
                title: 'Как проводить вебинары',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: 'https://www.youtube.com/watch?v=fcCS20ogo6E&feature=youtu.be&ab_channel=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D1%85',
                title: 'Как использовать вебинар на занятиях (краткая видеоинструкция)',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_po_nastrojke_chata_vebinara.pdf',
                title: 'Как настроить чат вебинара',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf',
                title: 'Практикумы Webinar - как проводить вебинары (видеоинструкции)',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya_po_polucheniju_videozapisi_provedennogo_Vebinara.pdf',
                title: 'Как получить запись прошедшего webinar',
                icon: 'https://webinar.ru/themes/webinar-main/assets2021/img/favicon.ico',
            },
            {
                link: OLD_LK_URL + '/storage/files/Instruktsiya__videozapis_lektsij.pdf',
                title: 'Как записать видеолекцию',
                icon: 'https://cdn.iconscout.com/icon/free/png-256/circle-geometric-red-round-37922.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Instruktsiya_po_sozdaniju_videozapisi_ekzamenov__provodimyh_v_onlajn-formate_4.pdf',
                title: 'Как сделать видеозапись экзамена (Webex, Teams)',
                icon: 'https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png',
            },
            {
                link: 'https://online.mospolytech.ru/enrol/index.php?id=44',
                title: 'Как пользоваться внешними ЭБС',
                icon: 'https://cdn-icons-png.flaticon.com/128/2232/2232688.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Dostup_k_sisteme_Antiplagiat.pdf',
                title: 'Как получить доступ к системе Антиплагиат',
                icon: 'https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico',
            },
            {
                link: 'https://online.mospolytech.ru/enrol/index.php?id=44',
                title: 'Инструкция по работе преподавателя с Антиплагиат (видео)',
                icon: 'https://www.antiplagiat.ru/favicon-1069bb8b8557d91de9974904a33270de.ico',
            },
        ],
    },
    {
        title: 'Приказы',
        links: [
            {
                link: OLD_LK_URL + '/storage/files/orders_staff/Prikaz_o_sozdanii_ekspertnoj_komissii.pdf',
                title: 'Приказ по основной деятельности от 29.04.2021 № 467-ОД «О создании экспертной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0793-OD_ot_02_09_2021_O_provedenii_obschih_sobranij_i_konferentsii_(2145965_v3).PDF',
                title: 'Приказ от 02.09.2021 № 793-ОД «О проведении общих собраний и конференции»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_ot_31_01_2020.PDF',
                title: 'Приказ по основной деятельности от 31.01.2020 № 159-ОД «О внесении изменений в состав конкурсной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_ob_utverzhdenii_perechnya_dolzhnostej_rabotnikov_s_nenormirovannym_rabochim_dnem_No_0441-OD_ot_18_03_2020.pdf',
                title: 'Приказ по основной деятельности от 18.03.2020 № 441-ОД «Об утверждении перечня должностей работников с ненормированным рабочим днем»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0157-OD_ot_31_01_2020_O_vnesenii_izmenenij_v_sostav_Attestatsionnoj_komissii_(1450119_v1).PDF',
                title: 'Приказ по основной деятельности от 31.01.2020 № 157-ОД «О внесении изменений в состав аттестационной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_29_05_2019_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(1216181_v2).PDF',
                title: 'Приказ по основной деятельности от 29.05.2019 № 381-ОД «О внесении изменений в состав конкурсной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_Prikaz_po_tabelju_(1411371_v2).pdf',
                title: 'Приказ по основной деятельности от 13.12.2019 № 1443-ОД «О своевременном предоставлении табеля учета использования рабочего времени»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0034-OD_ot_25_01_2018_o_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(710601_v2).pdf',
                title: 'Приказ по основной деятельности от 25.01.2018 № 34-ОД «О внесении изменений в состав аттестационной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0381-OD_ot_20_06_2018_O_sozdanii_konkursnoj_komissii_(807541_v2).pdf',
                title: 'Приказ по основной деятельности от 20.06.2018 № 381-ОД  «О внесении изменений в состав конкурсной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0507-OD_ot_14_06_2017_o_vnesenii_izmenenij_v_sostav_konkursnoj_komissii_(600355_v2).PDF',
                title: 'Приказ по основной деятельности от 14.06.2017 № 507-ОД «О внесении изменений в состав конкурсной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_0625-OD_ot_13_08_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(840701_v2).pdf',
                title: 'Приказ по основной деятельности от 13.08.2018 № 625-ОД «О внесении изменений в состав аттестационной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1129-OD_ot_22_11_2018_O_vnesenii_izmenenij_v_sostav_attestatsionnoj_komissii_(939494_v4).PDF',
                title: 'Приказ по основной деятельности от 22.11.2018 № 1129-ОД «О внесении изменений в состав аттестационной комиссии»',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/orders_staff/Prikaz_po_osnovnoj_deyatelnosti_No_1210-OD_ot_17_12_2018_O_vnesenii_izmenenij_v_sostav_Konkursnoj_komissii_(950151_v2).pdf',
                title: 'Приказ по основной деятельности от 17.12.2018 № 1210-ОД «О внесении изменений в состав конкурсной комиссии»',
                icon: HiOutlineDocumentText,
            },
        ],
    },
    {
        title: 'Положения',
        links: [
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_materialnoj_otvetstvennosti_rabotnikov_Moskovskogo_Politeha.pdf',
                title: 'Положение о материальной ответственности работников Московского Политеха',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozhenie_o_poryadke_zamescheniya_dolzhnostej_PPS_(2005001_v1).pdf',
                title: 'Положение о порядке замещения должностей ППС',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Polozhenie_o_sisteme_otbora_kandidatov__PPS.pdf',
                title: 'Положение о системе отбора кандидатов ППС',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Kodeks_etiki_i_sluzhebnogo_povedeniya_(355118_v2).pdf',
                title: 'Кодекс этики и служебного поведения работников',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/polozhenie_o_dk_2017.pdf',
                title: 'Положение о дисциплинарной комиссии по обучающимся',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Polozhenie_o_komissii_po_upravleniju_RID_(1242395_v2).pdf',
                title: 'Положение о комиссии по управлению правами на результаты интеллектуальной деятельности',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozhenie_o_poryadke_provedeniya_attestatsii_rabotnikov__zanimajuschih_dolzhnosti_professorsko-prepodavatelskogo_sostava.pdf',
                title: 'Положение о порядке проведения аттестации работников, занимающих должности профессорско-преподавательского состава',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozhenie_ob_antikorruptsionnoj_politike_No_0498-OD_ot_06042020.PDF',
                title: 'Положение об антикоррупционной политике',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Polozhenie_ob_attestatsii_rabotnikov___(674754_v2).pdf',
                title: 'Положение о порядке проведения аттестации работников',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Polozhenie_ob_otpuskah_(Novyj)_(686482_v1).pdf',
                title: 'Положение о порядке предоставления отпусков работникам',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozhenie_v_otnoshenii_obrabotki_personalnyh_dannyh__(377893_v2_).pdf',
                title: 'Положение об обработке и защите персональных данных',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozheniya_o_protsedure_izbraniya_vyborov_dekanov_fakultetov_i_zavedujuschih_kafedrami_(643622_v1).PDF',
                title: 'Положение о процедуре избрания деканов факультетов и заведующих кафедрами',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Polozhenie_ob_Uchenom_sovete_Prikaz_No_0682-OD_ot_05_06_2020.PDF',
                title: 'Положение об Ученом совете',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/stats/Prikaz_po_osnovnoj_deyatelnosti_No_2257-OD_ot_08_12_2020_Ob_utverzhdanii_LNA__regulirujuschie_sotsialno-trudovye_otn_(1830969_v4).pdf',
                title: 'Локальные нормативные акты, регулирующие социально-трудовые отношения',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/stats/Poryadok_oformleniya_pochasovoj_oplaty.pdf',
                title: 'Порядок оформления почасовой оплаты',
                icon: HiOutlineDocumentText,
            },
        ],
    },
]

export default instructionsTeacherData
