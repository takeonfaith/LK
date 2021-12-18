const getCorrectNumberFormat = (str: string) => Number(str.replace(/,/g, '.').replace(/\s/g, ''))

export default getCorrectNumberFormat
