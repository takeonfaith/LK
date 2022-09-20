export type divisionT = {
    id: string
    name: string
    contact: string
}

export const getDivisionsCrs = (divisionsCrs: divisionT[]) => {
    return divisionsCrs.map((division) => {
        return {
            id: +division.id,
            title: division.name + ' ' + division.contact,
        }
    })
}
