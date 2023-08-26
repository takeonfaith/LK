import { PassRegistration } from '../ui/pass-registration'
import { WorkplaceOrganization } from '../ui/workplace-organization'
import { SalaryPayment } from '../ui/salary-payment'
import { HRDocumentFlow } from '../ui/hr-document-flow'
import { Documents } from '../ui/documents'
import { OnboardingTopic } from '../types/onboarding'
import { Nutrition } from '../ui/nutrition'

export const topics: OnboardingTopic = [
    {
        title: 'Оформление пропуска',
        content: PassRegistration,
    },
    {
        title: 'Организация рабочего места',
        content: WorkplaceOrganization,
    },
    {
        title: 'Питание',
        content: Nutrition,
    },
    {
        title: 'Выплата заработной платы',
        content: SalaryPayment,
    },
    {
        title: 'Кадровый документооборот',
        content: HRDocumentFlow,
    },
    {
        title: 'Документы',
        content: Documents,
    },
]
