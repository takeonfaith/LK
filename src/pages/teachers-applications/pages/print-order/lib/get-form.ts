import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import localizeDate from '@utils/localize-date'

export const getOrderParamsForm = (): IInputArea => {
    return {
        title: 'Выполняемые работы',
        hint: 'Необходимо указать параметры работ, которые нужно выполнить',
        data: [],
        default: [
            [
                {
                    fieldName: 'print-name',
                    title: 'Наименование',
                    value: '',
                    required: true,
                },
                {
                    fieldName: 'print-format',
                    title: 'Формат',
                    value: '',
                    required: true,
                    width: '25%',
                },
                {
                    fieldName: 'amount',
                    title: 'Тираж',
                    value: '',
                    type: 'number',
                    required: true,
                    width: '25%',
                },
            ],
        ],
        addNew: true,
    }
}

export const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Заказ в отдел оперативной печати',
        data: [
            ...getBasicFieldsApplicationTeacher(
                // Todo: Delete the Тест Тестович id check after testings
                //  and put here only the 'data'
                data.id === '121037'
                    ? {
                          ...data,
                          subdivisions: [
                              {
                                  subdivision: 'Тестовое подразделение',
                                  categoty: 'mock_category',
                                  guid_worker: 'mock_guid_worker',
                                  jobType: 'mock_job_type',
                                  post: 'Тестовая должность',
                                  status: 'mock_status',
                                  wage: 'mock_wage',
                              },
                          ],
                      }
                    : data,
            ),
            {
                title: 'Запрос',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
            {
                title: 'Дата поступления и срок выполнения',
                type: 'date-interval',
                value: ['', ''],
                editable: true,
                fieldName: 'period',
                required: true,
                minValueInput: localizeDate(new Date(), 'weird'),
            },
        ],
    }
}

export const getAnnotationForm = (): IInputArea => {
    return {
        title: 'Дополнительно',
        data: [
            {
                title: 'Примечание',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
    }
}
