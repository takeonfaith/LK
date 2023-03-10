import { PreparedAlerts } from '@entities/alert/lib/prepare-data'
import normalizeString from '@shared/lib/normalize-string'

const search = (value: string, alerts: PreparedAlerts): PreparedAlerts =>
    Object.keys(alerts).reduce((acc, year) => {
        const newAlerts = alerts[year].filter((alert) => normalizeString(alert.title).includes(normalizeString(value)))
        if (acc[year]) acc[year] = newAlerts
        else acc[year] = newAlerts

        return acc
    }, {} as PreparedAlerts)

export default search
