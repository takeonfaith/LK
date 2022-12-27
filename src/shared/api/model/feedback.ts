export type Feedback = {
    fio?: string
    phone?: string
    email?: string
    last_update?: string | undefined
}

export type FormFeedback = Feedback & {
    message?: string
    subject?: string
}
