import { Subdivision } from '@api/model'

export const getFormattedSubDivisions = (subdivisions: Subdivision[] = []) => {
    return subdivisions.map((subdivision) => {
        return {
            id: subdivision.guid_worker,
            title: subdivision.subdivision + ' ' + subdivision.post,
        }
    })
}
