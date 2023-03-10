import { $api } from '@api/config'
import token from '@utils/token'
import { AcadPerformance } from './model/acad-performance'

type AcadPerformanceResponse = {
    academicPerformance: AcadPerformance[]
}

export const get = async ({ semestr }: { semestr: string }) => {
    return (await $api.get<AcadPerformanceResponse>(`?getAcademicPerformance&semestr=${semestr}&token=${token()}`))
        ?.data?.academicPerformance
}
