export type NotificationType =
    | 'info'
    | 'message'
    | 'alert'
    | 'payment-dorm'
    | 'payment-ed'
    | 'pps-contest'
    | 'hr-applications'
    | 'doc-for-review'
    | 'digital-services'
    | 'schedule'
    | 'schedule-session'
    | 'version-update'

export type TNotification = {
    id: string
    title: string
    text: string
    type: NotificationType
    icon?: ChildrenType
    time?: string
    image?: string
    duration?: number
    goTo?: string
    date?: string
    onClick?: () => void
    onClose?: () => void
    canClose?: boolean
}
