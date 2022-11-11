export type divisionT = {
    id: string
    name: string
    contact: string
}

export const getFormattedDivisions = (divisions: divisionT[]) => {
    return divisions.map((division) => {
        return {
            id: +division.id,
            title: division.name + ' ' + division.contact,
        }
    })
}
