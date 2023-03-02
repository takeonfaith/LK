import { settingsAccountModel } from '@entities/settings-account'
import { SubmitButton } from '@shared/ui/atoms'
import FileInput from '@shared/ui/file-input'
import React from 'react'
import styled from 'styled-components'

const ChangeAvatarStyled = styled.div`
    min-width: 500px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

const ChangeAvatar = () => {
    const {
        avatar: { data, loading, completed },
    } = settingsAccountModel.selectors.useData()

    const handleSendAvatar = () => {
        settingsAccountModel.effects.avatar.postAvatarFx(data)
    }

    return (
        <ChangeAvatarStyled>
            <FileInput
                maxFileSizeInBytes={0}
                files={data}
                setFiles={settingsAccountModel.events.avatar.changeAvatar}
                isActive={true}
                maxFiles={1}
                formats={['image/jpeg', 'image/jpg']}
            />
            <SubmitButton
                text="Изменить фотографию"
                isLoading={loading}
                completed={completed}
                action={handleSendAvatar}
                isActive={data.length === 1}
                popUpFailureMessage={'Фотография не загружена'}
                setCompleted={settingsAccountModel.events.avatar.changeCompleted}
            />
        </ChangeAvatarStyled>
    )
}

export default ChangeAvatar
