export interface TeacherStatement {
    name: string
    surname: string
    patronymic: string
    phone: string
    tel_mob_staff: string
    tel_staff: string
    email: string
    email_staff: string
    last_update: string
    subdivisions: Subdivision[]
}

interface Subdivision {
    post: string
    subdivision: string
}
