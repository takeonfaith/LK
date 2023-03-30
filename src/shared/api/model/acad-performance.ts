export interface IGrade {
    Зачтено: number
    Отлично: number
    Хорошо: number
    Удовлетворительно: number
    'Не явился': number
    Неудовлетворительно: number
}

export interface AcadPerformance {
    bill_num: string
    bill_type: string
    chair: string
    course: string
    doc_type: string
    exam_date: string
    exam_time: string
    exam_type: string
    grade: keyof IGrade
    id: string
    name: string
    teacher: string
    ticket_num: string
}
