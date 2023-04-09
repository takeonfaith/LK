import { WorkerApplication } from '@shared/api/model'
import { IInputArea } from '@ui/input-area/model'

const getOldPost = (dataWorkerApplication: WorkerApplication[], currentIndex: number): IInputArea => {
    return {
        title: 'Старое место работы:',
        data: [
            {
                title: 'Должность',
                type: 'simple-text',
                fieldName: 'post',
                value: dataWorkerApplication[currentIndex].jobTitle.toString(),
                visible: true,
            },
            {
                title: 'Структурное подразделение',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].subDivision.toString(),
                fieldName: 'subDivision',
                visible: true,
            },
            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'exRate',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: '0.25',
                    },
                    {
                        id: 1,
                        title: '0.5',
                    },
                    {
                        id: 2,
                        title: '1',
                    },
                ],
            },
        ],
    }
}

export default getOldPost
