/* eslint-disable @typescript-eslint/no-unused-vars */
import getSchedule from '@entities/schedule/lib/get-schedule'
import { CenterPage, SubmitButton, Title, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import FileInput from '@shared/ui/file-input'
import { DateInterval } from '@shared/ui/molecules'
import Subtext from '@shared/ui/subtext'
import React, { useState } from 'react'

const GenerateSchedule = () => {
    const [dates, setDates] = useState<string[]>([new Date().toString(), new Date().toString()])
    const [selectedTeacher, setSelectedTeacher] = useState(null)
    const [teacherSearch, setTeacherSearch] = useState('')
    const [groupSearch, setGroupSearch] = useState('')
    const groups = ['191-722', '191-723', '191-724', '191-725']

    return (
        <Wrapper load={() => null} error={null} data={[]}>
            <CenterPage height="100%">
                <Block
                    maxWidth="600px"
                    height="fit-content"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    orientation="vertical"
                    gap="16px"
                >
                    <Title size={2} align="left">
                        Генерация пересдач
                    </Title>
                    <DateInterval dates={dates} setDates={setDates} valid={false} setValid={() => null} />

                    <Subtext fontSize="1rem">Список комиссий</Subtext>
                    <FileInput
                        maxFileSizeInBytes={0}
                        files={[]}
                        setFiles={function (args: any): void {
                            throw new Error('Function not implemented.')
                        }}
                        isActive={false}
                    />
                    <Subtext fontSize="1rem">Список групп</Subtext>
                    <FileInput
                        maxFileSizeInBytes={0}
                        files={[]}
                        setFiles={function (args: any): void {
                            throw new Error('Function not implemented.')
                        }}
                        isActive={false}
                    />
                    <SubmitButton
                        isLoading={false}
                        completed={false}
                        text={'Сгенерировать расписание'}
                        action={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                        setCompleted={function (completed: boolean): void {
                            throw new Error('Function not implemented.')
                        }}
                    />
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default GenerateSchedule
