import { IInputArea } from '@ui/input-area/model'
import { StructuralSubdivisionOptions } from '@entities/applications/consts'

const getSubdivision = (): IInputArea => {
    return {
        title: '',
        data: [
            {
                title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
                type: 'radio',
                fieldName: 'structural-subdivision',
                value: StructuralSubdivisionOptions[0],
                editable: true,
                items: StructuralSubdivisionOptions,
                isSpecificRadio: true,
            },
        ],
    }
}

export default getSubdivision
