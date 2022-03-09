import { $api } from '@api/config'
import token from '@utils/token'

export const get = (semestr: string) => {
    return $api.get(`?getAcademicPerformance&semestr=${semestr}&token=${token()}`)
}
