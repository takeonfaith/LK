export type Project = {
    raiting: string
    project: string
    subproject: string
    project_theme: string
    project_info: string
    curator: string
    last_semestr_balls: string
    last_semestr_result: string
    arrear: string
    current_att1: string
    current_att2: string
    current_att_mid: string
    current_semestr_balls: string
    current_semestr_result: string
    arrear_balls: string
    arrear_result: string
    year: string
    semestr: string
}

export type Projects = {
    [key: string]: Project
}
