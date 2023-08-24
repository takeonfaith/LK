import { Documents } from '../lib/Documents'
import { HRDocumentFlow } from '../lib/HRDocumentFlow'
import { PassRegistration } from '../lib/PassRegistration'
import { SalaryPayment } from '../lib/SalaryPayment'
import { WorkplaceOrganization } from '../lib/WorkplaceOrganization'
import { OnboardingTopic } from '../types/Onboarding'

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
