import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import Avatar from '@features/home/ui/molecules/avatar'
import { LoadFileButton, SubmitButton, Title } from '@ui/atoms'
import List from '@ui/list'
import prepareFormData from '@utils/prepare-form-data'
import { useStore } from 'effector-react'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { sendNewAvatar } from 'widgets/user-big/lib/send-new-avatar'

const ModalWrapper = styled.div`
    @media screen and (min-width: 1001px) {
        width: 600px;
        /* height: 600px; */
    }
`

const ChangeAvatar = () => {
    //  const { file } = useStore($fileUploadStore)
    const [files, setFiles] = useState<File[]>([])
    const [completed, setCompleted] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const {
        data: { user },
    } = userModel.selectors.useUser()

    const handleSubmitForm = useCallback(
        (files: File[]) => {
            const [file] = files

            sendNewAvatar({
                setLoading,
                setCompleted,
                sendFx: userModel.effects.sendNewAvatarFx,
                file,
            })
        },
        [files, setFiles],
    )

    if (!user) return null

    return (
        <ModalWrapper>
            <List horizontalAlign="center" gap={15}>
                <Title size={3} align="left">
                    Изменение фотографии профиля
                </Title>
                <LoadFileButton
                    label="Сменить аватарку"
                    maxFileSizeInBytes={0}
                    files={files}
                    setFiles={setFiles}
                    maxFiles={1}
                    isActive={true}
                />
                <SubmitButton
                    text="Изменить фотографию"
                    action={() => {
                        handleSubmitForm(files)
                    }}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={!!files.length}
                    popUpFailureMessage="Необходимо загрузить хотя бы один файл"
                />
            </List>
        </ModalWrapper>
    )
}

export default ChangeAvatar
