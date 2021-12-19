import { $api } from '@api/config'

export const get = (semestr: string) => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getAcademicPerformance&semestr=${semestr}&token=${token}`)
}
