import { Payments } from '@api/model'

const changeCanSign = (payments: Payments | null, contractId: string, value: boolean): Payments | null => {
    if (!payments) return null

    const newDormitoryData = payments.dormitory.map((dorm) => {
        if (dorm.id === contractId) {
            return { ...dorm, can_sign: value }
        }
        return dorm
    })

    return {
        ...payments,
        dormitory: newDormitoryData,
    }
}

export default changeCanSign
