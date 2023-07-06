/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitButton, Wrapper } from '@shared/ui/atoms'
import FileInput from '@shared/ui/file-input'
import { DateInterval } from '@shared/ui/molecules'
import PageBlock from '@shared/ui/page-block'
import useSubmitButton from '@shared/ui/submit-button/use-submit-button'
import Subtext from '@shared/ui/subtext'
import axios from 'axios'
import React, { useState } from 'react'
import download from 'downloadjs'
import { PopUpMessage } from 'widgets'
import { popUpMessageModel } from '@entities/pop-up-message'

const GenerateSchedule = () => {
    const [dates, setDates] = useState<string[]>([new Date().toString(), new Date().toString()])
    const [filesTeachers, setFilesTeachers] = useState<File[]>([])
    const [filesGroups, setFilesGroups] = useState<File[]>([])
    const [valid, setValid] = useState<boolean>(false)

    const {
        loading: [loading, setLoading],
        completed: [completed, setCompleted],
        isActive,
    } = useSubmitButton(valid && filesGroups.length > 0 && filesTeachers.length > 0)

    const sendData = async () => {
        const formData = new FormData()
        formData.set('dateStart', dates[0])
        formData.set('dateEnd', dates[1])
        formData.set('groups', filesGroups[0])
        formData.set('teachers', filesTeachers[0])
        setLoading(true)
        try {
            const file = await axios.post('http://localhost:5001/generate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob',
            })
            if (file.status === 200) {
                const result = new Blob([file.data])
                if (result !== undefined) {
                    setLoading(false)
                    setCompleted(true)
                    download(result, 'Пересдачи.xlsx')
                }
            }
        } catch (error) {
            popUpMessageModel.events.evokePopUpMessage({
                type: 'failure',
                message: 'Не удалось сгенерировать расписание',
            })
        }
    }
    return (
        <Wrapper load={() => null} error={null} data={[]}>
            <PageBlock>
                <DateInterval dates={dates} setDates={setDates} valid={valid} setValid={setValid} />

                <Subtext fontSize="1rem">Список комиссий</Subtext>
                <FileInput
                    files={filesTeachers}
                    setFiles={setFilesTeachers}
                    isActive={true}
                    formats={[
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        'application/vnd.ms-excel',
                    ]}
                />
                <Subtext fontSize="1rem">Список групп</Subtext>
                <FileInput
                    files={filesGroups}
                    setFiles={setFilesGroups}
                    isActive={true}
                    formats={[
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        'application/vnd.ms-excel',
                    ]}
                />
                <SubmitButton
                    isLoading={loading}
                    popUpFailureMessage="Введите интервал даты и добавьте файлы!"
                    completed={completed}
                    text={'Сгенерировать расписание'}
                    action={sendData}
                    isActive={isActive}
                    setCompleted={setCompleted}
                />
            </PageBlock>
        </Wrapper>
    )
}

export default GenerateSchedule
