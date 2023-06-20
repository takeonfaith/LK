import { IInputAreaData } from '@ui/input-area/model'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'
import { UserApplication } from '@api/model'

const getStudentSubdivisions = ({ divisions_crs }: UserApplication): IInputAreaData[] => {
    return [
        {
            title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
            required: true,
            type: 'radio',
            fieldName: 'structural-subdivision',
            value: null,
            editable: true,
            items: getFormattedDivisions(divisions_crs),
            isSpecificRadio: true,
            specialType: 'personalMethod',
        },
    ]
}

export default getStudentSubdivisions
