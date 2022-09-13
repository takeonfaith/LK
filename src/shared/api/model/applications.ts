import { User } from '@api/model/user'
import { divisionT } from '@features/applications/lib/get-divisions'

export interface Application {
    regDate: string
    regNumber: string
    requestTitle: string
    requestBody: string
    status: 'Готово' | 'Принято в работу' | 'Отклонено'
    statusDate: string
    structuralSubdivision: string
    notes: string
}

export interface Subdivision {
    guid_worker: string
    subdivision: string
    post: string
    jobType: string
    wage: string
    categoty: string
    status: string
}

export interface Order {
    number: string
    date: string
    name: string
    reason: string
    comment: string
    fullname: string
}

export interface Contract {
    id: string
    contragent: string
    number: string
    name: string
    type: string
    level: string
    hostel_num: string
    hostel_room: string
    signDate: string
    startDate: string
    endDatePlan: string
    endDateFact: string
    sum: string
    balance: string
    balance_currdate: string
}

export interface UserApplication extends User {
    guid_person: string
    email: string
    phone: string
    PEP_status: boolean
    snils: string
    has_hostel: boolean
    hostel_num: string
    hostel_room: string
    subdivisions?: Subdivision[]
    passSer: string
    passNum: string
    passDiv: string
    passDate: string
    learn_status: string
    code: string
    faculty: string
    specialty: string
    specialty_code: string
    specialty_name: string
    specialization: string
    educationForm: string
    finance: string
    degreeLevel: string
    enterYear: string
    group: string
    order?: Order[]
    contracts?: Contract[]
    last_update: string
    divisions_crs: divisionT[]
    divisions_all: divisionT[]
}
