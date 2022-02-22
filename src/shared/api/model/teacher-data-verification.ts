export interface TeacherDataVerification {
    armyFiles: { url: string; filename: string }[]
    army_doc_none: boolean
    bdate: string
    bplace: string
    contactInfoValid: boolean
    dr_lic_none: boolean
    driveLicense: { category: string; num: string; date_end: string }
    driveLicenseFiles: { url: string; filename: string }[]
    edu_doc: string
    edu_doc_num: string
    edu_doc_ser: string
    edu_level: string
    edu_org: string
    edu_spec: string
    edu_year: string
    educationFiles: { url: string; filename: string }[]
    educationValid: boolean
    email_private: string
    email_staff: string
    family: { relation: string; fio: string; bdate: string }[]
    familyStatus: string
    family_none: boolean
    fio: string
    invalidFiles: { url: string; filename: string }[]
    invalidValid: boolean
    invalid_date: string
    invalid_grp: string
    invalid_num: string
    invalid_ser: string
    is_invalid: boolean
    is_not_invalid: boolean
    languages: { language: string; level: string }
    loc_addr: string
    loc_date: string
    loc_match_reg: string
    locationValid: boolean
    pass_citizenship: string
    pass_date: string
    pass_div: string
    pass_div_code: string
    pass_num: string
    pass_ser: string
    pass_type: string
    passportFiles: { url: string; filename: string }[]
    passportValid: false
    personalDataFiles: { url: string; filename: string }[]
    personalDataValid: boolean
    reg_city: string
    reg_corpus: string
    reg_country: string
    reg_date: string
    reg_addr: string
    reg_date_start: string
    reg_flat: string
    reg_house: string
    reg_index: string
    reg_none: boolean
    reg_street: string
    registrationFiles: { url: string; filename: string }[]
    registrationValid: boolean
    sex: 'Мужской' | 'Женский'
    tel_mob_private: string
    tel_mob_staff: string
    tel_staff: string
    valid_date: string
    validated: boolean
}
