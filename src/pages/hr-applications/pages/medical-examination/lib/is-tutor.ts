export const getIsTutor = (employeeFuid: string) => {
    return localStorage.getItem(employeeFuid)
}

export const setIsTutor = (empGuidIsTutor: any[]) => {
    return empGuidIsTutor.map((el) => {
        localStorage.setItem(el.employeeGuid, el.tutor.toString())
    })
}
