import { Alert } from '@shared/api/model/alert'

type Year = string
export type PreparedAlerts = Record<Year, Alert[]>

const prepareData = (alerts: Alert[]) =>
    alerts.reduce((acc, alert) => {
        const year = new Date(alert.date).getFullYear()
        if (acc[year]) acc[year].push(alert)
        else acc[year] = [alert]
        return acc
    }, {} as PreparedAlerts)

export default prepareData
