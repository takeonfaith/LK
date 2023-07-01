let data: divisions[]
export interface divisions {
    divisionGuid: string
    divisionName: string
}
const setDivisions = (div: divisions[]) => {
    data = div
}

const getSuggestions = () => {
    const suggestions = data.map((data) => data.divisionName)
    return suggestions
}

const getDivisionGuid = (divisionName: string) => {
    const division = data.find((item) => item.divisionName === divisionName)
    return division ? division.divisionGuid : ''
}

export { setDivisions, getSuggestions, getDivisionGuid }
