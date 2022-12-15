export enum HelpfulInfoEnum {
    information = 'information',
    instructions = 'instructions',
    courses = 'courses',
    security = 'security',
    orders = 'orders',
    regulations = 'regulations',
}

export const helpfulInfoName: Record<HelpfulInfoEnum, string> = {
    [HelpfulInfoEnum.information]: 'Полезная информация',
    [HelpfulInfoEnum.instructions]: 'Инструкции',
    [HelpfulInfoEnum.courses]: 'Курсы',
    [HelpfulInfoEnum.security]: 'Безопасность',
    [HelpfulInfoEnum.orders]: 'Приказы',
    [HelpfulInfoEnum.regulations]: 'Положения',
}
