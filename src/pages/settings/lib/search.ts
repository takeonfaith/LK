import { IRoutes } from '@app/routes/general-routes'
import normalizeString from '@shared/lib/normalize-string'
import { TFullSettingsModel } from '../model'

const search = (value: string, settingsConfig: TFullSettingsModel, allRoutes: IRoutes | null) => {
    const result: string[][] = []
    if (!allRoutes) return result
    let lastIndex = 0
    let found = false
    for (const key in settingsConfig) {
        found = false
        result.push([])
        const title = allRoutes[key].title.split('. ')[1]
        result[lastIndex].push(title)
        const sections = settingsConfig[key as keyof TFullSettingsModel]

        for (const section of sections) {
            for (const field of section.fields) {
                //  console.log(field.title, value, normalizeString(field.title).includes(normalizeString(value)))
                if (normalizeString(field.title).includes(normalizeString(value))) {
                    if (found) {
                        result.push([...result[lastIndex].slice(0, result[lastIndex].length - 1), field.title])
                        lastIndex++
                    } else {
                        result[lastIndex].push(section.title)
                        result[lastIndex].push(field.title)
                    }

                    found = true
                }
            }
        }

        if (!found) result.pop()
        else lastIndex++
    }

    return result
}

export default search
