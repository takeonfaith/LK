import Select, { SelectPage } from '@features/select'
import { pEStudentFilterModel, pEStudentIsExamModel } from '@pages/teacher-physical-education/model'
import Input from '@shared/ui/input'
import { useUnit } from 'effector-react'
import { Wrapper } from './styled'
import React from 'react'
import ToggleItem from '@shared/ui/toggle-item'

enum FiltersSelect {
    Group = 'group.groupName',
    Course = 'course',
}

const courses = [
    { id: 0, title: 'Не выбрано' },
    { id: 1, title: '1 курс' },
    { id: 2, title: '2 курс' },
    { id: 3, title: '3 курс' },
    { id: 4, title: '4 курс' },
]

export const PEStudentsFilter = () => {
    const [filters, isExam] = useUnit([pEStudentFilterModel.stores.$filters, pEStudentIsExamModel.stores.$isExam])
    return (
        <Wrapper>
            <Input
                title="Номер группы"
                value={filters[FiltersSelect.Group] as string}
                setValue={(value) => {
                    pEStudentFilterModel.events.addFilter({ name: FiltersSelect.Group, value })
                }}
            />
            <Select
                title="Курс"
                items={courses}
                selected={courses.find((c) => c.id === filters[FiltersSelect.Course]) ?? null}
                setSelected={
                    ((value: SelectPage | null) => {
                        if (value?.id) {
                            pEStudentFilterModel.events.addFilter({
                                name: FiltersSelect.Course as string,
                                value: value.id,
                            })

                            return
                        }

                        pEStudentFilterModel.events.addFilter({
                            name: FiltersSelect.Course as string,
                            value: '',
                        })
                    }) as any
                }
            />
            <ToggleItem
                title={'Проведение зачета'}
                state={isExam}
                action={(value) => pEStudentIsExamModel.events.setIsExam(value)}
            />
        </Wrapper>
    )
}
