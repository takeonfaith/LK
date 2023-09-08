import { userModel } from '@entities/user'
import SearchWithHints from '@features/search-with-hints'
import { studentApi, teacherApi } from '@shared/api'
import Masks from '@shared/lib/masks'
import { Hint } from '@shared/ui/search'
import { AxiosResponse } from 'axios'
import React from 'react'
import { FiSearch, FiUsers } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'

type Props = {
    value: string
    setValue: (value: string) => void
    onHintClick: (isSearchingGroup: boolean) => (hint: Hint | undefined) => void
    onValueEmpty?: () => void
}

export const TeacherGroupSearch = ({ value, setValue, onHintClick, onValueEmpty }: Props) => {
    const isGroup = /\d/.test(value)
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const request = async (value: string): Promise<AxiosResponse<{ items: any[] }>> => {
        if (isGroup) {
            return await studentApi.getGroups(value)
        }

        return await teacherApi.get(value, '', 1, 20)
    }

    return (
        <SearchWithHints
            value={value}
            width="100%"
            setValue={setValue}
            onHintClick={onHintClick(isGroup)}
            placeholder={'Поиск'}
            customMask={isGroup ? Masks.groupMask : undefined}
            transformRequest={isGroup ? undefined : (el) => el.fio}
            request={request}
            leftIcon={value.length === 0 ? <FiSearch /> : isGroup ? <FiUsers /> : <HiOutlineUserCircle />}
            onValueEmpty={user?.user_status === 'staff' ? onValueEmpty : undefined}
        />
    )
}
