export interface businesstripNotification {
    id: string
    analit?: number
    startDate?: string
    endDate?: string
    tripType?: string
    сountry?: string
    city?: string
    organization?: string
    event?: string
    travelingTask?: string
    objective?: string
    basis?: string
    guidRab?: string
    employee?: string
    docId?: number
    status?: string
    file: string
    viewed: boolean
    post?: string
}

export interface baseNotification {
    id: string
    type: string
    startDate?: string
    endDate?: string
    subdivision?: string
    post?: string
    jobType?: string
    file: string
    viewed: boolean
    event?: string
}

export type ItemNotification = baseNotification | businesstripNotification

export type NameListNotification = 'businesstrip' | 'fire' | 'vacation'

export interface Notifications {
    [index: string]: ItemNotification[]
}

export interface viewNotificationResponse {
    result: string
}
