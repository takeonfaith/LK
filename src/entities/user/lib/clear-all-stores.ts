import { acadPerformanceModel } from '@entities/acad-performance'
import { adminLinksModel } from '@entities/admin-links'
import { applicationsModel } from '@entities/applications'
import { confirmModel } from '@entities/confirm'
import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import { electronicInteractionModel } from '@entities/electronic-interaction'
import { menuModel } from '@entities/menu'
import { messagesModel } from '@entities/messages'
import { personalNotificationModel } from '@entities/notification'
import { paymentsModel } from '@entities/payments'
import { popUpMessageModel } from '@entities/pop-up-message'
import { projectActivitesModel } from '@entities/project-activites'
import { scheduleModel } from '@entities/schedule'
import { superiorRoomModel } from '@entities/superior-room'
import { teacherDateVerificationModel } from '@entities/teacher-data-verification'

const stores = [
    acadPerformanceModel,
    adminLinksModel,
    applicationsModel,
    confirmModel,
    electronicInteractionModel,
    menuModel,
    messagesModel,
    personalNotificationModel,
    paymentsModel,
    popUpMessageModel,
    projectActivitesModel,
    scheduleModel,
    superiorRoomModel,
    teacherDateVerificationModel,
    contactInfoActualizationModel,
]

const clearAllStores = () => {
    stores.forEach((store) => {
        store.events.clearStore()
    })
}

export default clearAllStores
