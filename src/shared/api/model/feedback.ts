export type Feedback = {
    fio?: string
    tel_mob_private?: string
    email_private?: string
    last_update?: string | undefined
}

export type FormFeedback = Feedback & {
    message?: string
    theme?: string
}
