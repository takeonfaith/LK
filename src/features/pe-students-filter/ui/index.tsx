import SearchWithHints from '@features/search-with-hints'
import Select, { SelectPage } from '@features/select'
import { pEStudentFilterModel, pEStudentIsExamModel } from '@pages/teacher-physical-education/model'
import { studentApi } from '@shared/api'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { Wrapper } from './styled'
import Masks from '@shared/lib/masks'
import { FiUsers } from 'react-icons/fi'

export enum FiltersSelect {
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
    const [groupSearch, setGroupSearch] = useState<string>((filters[FiltersSelect.Group]?.value as string) ?? '')

    return (
        <Wrapper>
            <SearchWithHints
                leftIcon={<FiUsers />}
                placeholder={'Номер группы'}
                value={groupSearch}
                setValue={setGroupSearch}
                customMask={Masks.groupMask}
                onValueEmpty={() => pEStudentFilterModel.events.addFilter({ name: FiltersSelect.Group, value: '' })}
                onHintClick={(hint) =>
                    pEStudentFilterModel.events.addFilter({
                        name: FiltersSelect.Group,
                        value: hint?.id ?? '',
                        strict: true,
                    })
                }
                request={studentApi.getGroups}
                size={'big'}
            />
            <Select
                items={courses}
                size={'big'}
                placeholder="Курс"
                selected={courses.find((c) => c.id === filters[FiltersSelect.Course]?.value) ?? null}
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
                title={'Зачет'}
                state={isExam}
                action={(value) => pEStudentIsExamModel.events.setIsExam(value)}
            />
        </Wrapper>
    )
}
