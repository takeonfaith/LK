import { Subdivision } from '@api/model'

export const getFormattedSubDivisions = (subdivisions: Subdivision[] = []) => {
    return subdivisions.map((subdivision) => {
        return {
            id: subdivision.guid_staff,
            title: subdivision.subdivision + ' (' + subdivision.post + ')',
        }
    })
}
