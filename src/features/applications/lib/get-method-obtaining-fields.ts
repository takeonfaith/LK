import { IInputAreaData } from '@ui/input-area/model'
import { MethodObtainingOptions } from '@entities/applications/consts'

const getMethodObtainingFields = (): IInputAreaData[] => {
    return [
        {
            title: 'Способ получения справки',
            type: 'select',
            width: '100%',
            fieldName: 'method_obtaining',
            value: null,
            editable: true,
            required: true,
            items: MethodObtainingOptions,
        },
    ]
}

export default getMethodObtainingFields
