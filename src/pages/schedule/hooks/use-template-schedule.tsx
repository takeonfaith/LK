import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'

/*
    TODO: 
    1. Зум календаря
    2. Придумать, как быть с расписанием сессии
    3. Добавить время в event-item
    4. Неделя и семестр вид для мобилок
    5. Список преподов?
*/

const useTemplateSchedule = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const handleLoad = () => {
        scheduleModel.effects.getScheduleFx({ user, group: user?.group ?? '' })
    }

    return {
        handleLoad,
    }
}

export default useTemplateSchedule
