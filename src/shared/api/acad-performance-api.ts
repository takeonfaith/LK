import { $api } from '@api/config'
import getToken from '@utils/token'

export const get = (semestr: string) => {
    return $api.get(`?getAcademicPerformance&semestr=${semestr}&token=${getToken()}`)
}
