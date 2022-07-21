import { OLD_LK_URL } from '@consts'
import { IconType } from 'react-icons'
import { HiOutlineDocumentText } from 'react-icons/hi'

type LinksType = {
    link: string
    title: string
    icon: IconType | string
}

export type InstructionsType = {
    title: string
    links: LinksType[]
}

const instructionsStudentData: InstructionsType[] = [
    {
        title: 'Инструкции',
        links: [
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Instruktsiya_dlya_obuchajuschihsya_po_podkljucheniju_k_Cisco_Webex.pdf',
                title: 'Как подключиться к Cisco Webex',
                icon: 'https://lh3.googleusercontent.com/-fISFqYToaYY/YNMY2EpjZuI/AAAAAAAAAqI/vBY0kGYsLf0EuJPV-jv5TXMtxkAfdm0twCLcBGAsYHQ/s400/128x128%2BCisco%2BWebex.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Rabota_obuchajuschihsya_v_Microsoft_Teams.pdf?1',
                title: 'Как пользоваться Office365 и Teams для онлайн-траснляций и проектной работы',
                icon: 'https://pcprogs.net/uploads/posts/2021-08/1627783088_microsoft-office-2021-icon.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Dostup_studentov_k_oblachnym_servisam_Microsoft.pdf?1',
                title: 'Доступ к облачным сервисам Microsoft',
                icon: 'https://cdn.icon-icons.com/icons2/195/PNG/256/Microsoft_23401.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Ispolzovanie_studentami_Microsoft_OneDrive_v_Moskovskom_Politehe.pdf?1',
                title: 'Доступ к Microsoft OneDrive для обучающихся Московского Политеха',
                icon: 'https://cdn.iconscout.com/icon/free/png-256/onedrive-9-1174819.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Kak_studentu_poluchit_dostup_k_kursu_v_LMS.pdf',
                title: 'Как студенту получить доступ к курсу в LMS',
                icon: 'https://online.mospolytech.ru/theme/opentechnology/pix/favicon.ico',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Instruktsiya_po_ispolzovaniju_Servisa_Pechati_Moskovskogo_Politeha_dlya_studentov_(2).pdf',
                title: 'Инструкция по использованию платного Сервиса Печати Московского Политеха',
                icon: 'https://freeiconshop.com/wp-content/uploads/edd/print-flat.png',
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Kak_vesti_translyatsii_zanyatij_dlya_nahodyaschihsya_za_predelami_RF.pdf',
                title: 'Информация для старост групп. Как вести трансляцию очных занятий для тех, кого нет в аудитории',
                icon: 'https://cdn.iconscout.com/icon/free/png-256/teams-1-1174823.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Kak_smotret_translyatsii_zanyatij__nahodyas_za_predelami_RF(1).pdf',
                title: 'Как смотреть трансляции занятий, находясь за пределами РФ',
                icon: 'https://icons.iconarchive.com/icons/wikipedia/flags/256/RU-Russia-Flag-icon.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/BROADCASTING.pdf',
                title: 'How to watch lectures online (for the students located outside the Russian Federation)',
                icon: 'https://icons.iconarchive.com/icons/dtafalonso/modern-xp/256/ModernXP-73-Globe-icon.png',
            },
            {
                link: OLD_LK_URL + '/storage/files/Gde_najti_kovorkingi_-_tam_est_WiFi__stoly__pufy_i_rozetki.pdf',
                title: 'Где найти коворкинги - там есть WiFi, столы, пуфы и розетки',
                icon: 'https://iconsplace.com/wp-content/uploads/_icons/fa8072/256/png/wifi-icon-15-256.png',
            },
        ],
    },
    {
        title: 'Положения',
        links: [
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Vremennoe_polozhenie_o_provedenii_tekuschego_kontrolya_uspevaemosti_i_promezhutochnoj_attestatsii_obuchajuschihsya_v_usloviyah_obespecheniya_rezhima_izolyatsii_v_tselyah_predotvrascheniya_rasprostraneniya_koronavirusnoj_infektsii.pdf',
                title: 'Временное положение о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в условиях обеспечения режима изоляции в целях предотвращения распространения коронавирусной инфекции',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_provedenii_gosudarstvennoj_itogovoj_attestatsii_s_primeneniem_elektronnogo_obucheniya_i_DO.pdf',
                title: 'Положение о проведении государственной итоговой аттестации с применением электронного обучения и ДОТ',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_komissii_po_uregulirovaniju_sporov_mezhdu_uchastnikami_obrazovatelnyh_otnoshenij.PDF',
                title: 'Положение о комиссии по урегулированию споров между участниками образовательных отношений',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_ob_organizacii_obrazovatelnogo_processa.pdf',
                title: 'Положение об организации образовательного процесса',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_o_distsiplinarnoj_komissii.pdf',
                title: 'Положение о дисциплинарной комиссии',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_o_zapolnenii_vakantnyh_mest.pdf',
                title: 'Положение о заполнении вакантных мест',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_O_poryadke_zacheta.pdf',
                title: 'Положение о порядке зачета результатов освоения обучающимися учебных дисциплин и практик при переводе, восстановлении, получении последующего образования',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_poryadke_okazaniya_materialnoj_podderzhki_nuzhdajuschimsya_obuchajuschimsya.pdf',
                title: 'Положение о порядке оказания материальной поддержки нуждающимся обучающимся',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_poryadke_provedeniya_gosudarstvennoj_itogovoj_attestatsii.pdf',
                title: 'Положение о порядке проведения государственной итоговой аттестации',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_stipendialnom_obespechenii_i_drugih_formah_materialnoj_podderzhki.pdf',
                title: 'Положение о стипендиальном обеспечении и других формах материальной поддержки',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_ob_osvoenii_fakultativnyh_i_elektivnyh_distsiplin.pdf',
                title: 'Положение об освоении факультативных и элективных дисциплин',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_ob_obuchenii_po_individualnomu_uchebnomu_planu__v_tom_chisle_ob_uskorennom_obuchenii.pdf',
                title: 'Положение об обучении по индивидуальному учебному плану, в том числе об ускоренном обучении',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Poryadok_podachi_i_rassmotreniya_apellyatsii_o_narushenii_protsedury_provedeniya_gosudarstvennogo_attestatsionnogo_ispytaniya_ili_nesoglasii_s_ego_rezultatami.pdf',
                title: 'Порядок подачи и рассмотрения апелляции о нарушении процедуры проведения государственного аттестационного испытания или несогласии с его результатами',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Polozhenie_o_promezhutochnoj_attestatsii_aspirantov.pdf',
                title: 'Положение о промежуточной аттестации аспирантов',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Polozhenie_o_poryadke_provedeniya_gosudarstvennoj_itogovoj_attestatsii_po_aspiranture.pdf',
                title: 'Положение о порядке проведения государственной итоговой аттестации по аспирантуре',
                icon: HiOutlineDocumentText,
            },
        ],
    },
    {
        title: 'Правила',
        links: [
            {
                link: OLD_LK_URL + '/storage/files/Pravila_vnutrennego_rasporyadka_v_studencheskom_gorodke.pdf',
                title: 'Правила внутреннего распорядка в студенческом городке',
                icon: HiOutlineDocumentText,
            },
            {
                link: OLD_LK_URL + '/storage/files/Pravila_vnutrennego_rasporyadka_obuchajuschihsya.pdf',
                title: 'Правила внутреннего распорядка обучающихся',
                icon: HiOutlineDocumentText,
            },
            {
                link:
                    OLD_LK_URL +
                    '/storage/files/Prikaz_ot_25_01_2021_No_89-OD_Ob_izmenenii_Pravil_vnutrennego_rasporyadka_obuchajuschihsya.pdf',
                title: 'Приказ от 25.01.2021 № 89-ОД «Об изменении Правил внутреннего распорядка обучающихся»',
                icon: HiOutlineDocumentText,
            },
        ],
    },
]

export default instructionsStudentData
