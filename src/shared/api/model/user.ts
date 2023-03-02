import { Sex } from '@utility-types/sex'

type UserStatus = 'stud' | 'staff'

type EducationFormT = 'Очная' | 'Очно-заочная' | 'Заочная' | 'Недоступен'

export interface User {
    id: string
    name: string
    fullName: string
    status: string
    avatar: string
    course: number
    surname: string
    birthday: string
    patronymic: string
    email?: string
    phone?: string
    orders: string[]
    hasAlerts: boolean
    sex: Sex
    code: string
    faculty: string
    group: string
    specialty: string
    specialization: string
    degreeLength: number
    educationForm: EducationFormT
    finance: string
    degreeLevel: string
    enterYear: string
    subdivisions?: Subdivision[]
    user_status: UserStatus
    lastaccess: string
    available_accounts?: { name: string; avatar: string; token: string }[]
    authorIDs?: AuthorIDs
}

interface Subdivision {
    categoty: string
    jobType?: string
    status?: string
    subdivision?: string
    wage?: string
    post?: string
}

interface AuthorIDs {
    wosReasearcher?: string
    scopus?: string
    eLibrary?: string
}
