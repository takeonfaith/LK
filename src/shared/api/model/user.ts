import { Sex } from '@utility-types/sex'

export interface User {
    id: string
    name: string
    status: string
    avatar: string
    course: number
    surname: string
    birthday: string
    patronymic: string
    orders: string[]
    sex: Sex
    code: string
    faculty: string
    group: string
    specialty: string
    specialization: string
    degreeLength: number
    educationForm: string
    finance: string
    degreeLevel: string
    enterYear: string
    subdivisions?: Subdivision[]
}

interface Subdivision {
    categoty: string
    jobType?: string
    status?: string
    subdivision?: string
    wage?: string
}
