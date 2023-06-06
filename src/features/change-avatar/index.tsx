import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import { FieldProps } from '@pages/settings/model'
import { changeAvatar } from '@shared/api/user-api'
import { Colors } from '@shared/consts'
import { Message, SubmitButton } from '@shared/ui/atoms'
import FileInput from '@shared/ui/file-input'
import List from '@shared/ui/list'
import useSubmitButton from '@shared/ui/submit-button/use-submit-button'
import UserHeader from '@shared/ui/user-header'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ChangeAvatarStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    @media (min-width: 1001px) {
        width: 400px;
    }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChangeAvatar = (props: FieldProps) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    const [files, setFiles] = useState<File[]>([])
    const [loadedAvatar, setLoadedAvatar] = useState<string | null>(null)
    const {
        completed: [completedDelete, setCompletedDelete],
        loading: [loadingDelete, setLoadingDelete],
        error: [errorDelete, setErrorDelete],
        isActive: isActiveDelete,
    } = useSubmitButton(!!user?.avatar)

    const {
        completed: [completed, setCompleted],
        loading: [loading, setLoading],
        error: [error, setError],
        isActive,
    } = useSubmitButton(files.length === 1)

    useEffect(() => {
        const reader = new FileReader()

        reader.onloadend = () => {
            setLoadedAvatar(reader.result as string)
        }

        if (files[0]) {
            reader.readAsDataURL(files[0])
        } else setLoadedAvatar(null)
    }, [files])

    const handleSubmit = async () => {
        try {
            setLoading(true)
            setCompleted(false)
            const result = await changeAvatar(files[0])
            if (result.data.result !== 'ok') throw new Error(result.data.errors)
            setCompleted(true)
            setLoading(false)
            setFiles([])
            userModel.events.update({ key: 'avatar', value: loadedAvatar as string })
        } catch (error) {
            setError('Ошибка: ' + (error as Error).message)
        }
    }

    const handleDelete = async () => {
        try {
            setLoadingDelete(true)
            setCompletedDelete(false)
            const result = await changeAvatar()
            if (result.data.result !== 'ok') throw new Error(result.data.errors)
            setCompletedDelete(true)
            setLoadingDelete(false)
            userModel.events.update({ key: 'avatar', value: '' })
        } catch (error) {
            setErrorDelete('Ошибка: ' + (error as Error).message)
        }
    }

    const deleteConfirm = () =>
        confirmModel.events.evokeConfirm({
            message: 'Вы уверены, что хотите удалить фото профиля?',
            onConfirm: handleDelete,
        })

    return (
        <ChangeAvatarStyled>
            <UserHeader
                avatar={loadedAvatar ?? user?.avatar}
                name={user?.fullName ?? ''}
                isMe={false}
                type={user?.user_status}
                noInfo
            />

            <Message type="failure" visible={!!error || !!errorDelete}>
                {error || errorDelete}
            </Message>
            <FileInput
                maxFileSizeInBytes={0}
                files={files}
                maxFiles={1}
                formats={['image/jpeg']}
                setFiles={setFiles}
                isActive
            />
            <List direction="horizontal">
                {user?.avatar && (
                    <SubmitButton
                        isLoading={loadingDelete}
                        background={Colors.red.main}
                        completed={completedDelete}
                        isActive={isActiveDelete}
                        text={'Удалить фото профиля'}
                        action={deleteConfirm}
                        setCompleted={setCompletedDelete}
                    />
                )}
                <SubmitButton
                    isLoading={loading}
                    completed={completed}
                    isActive={isActive}
                    text={'Обновить'}
                    popUpSuccessMessage="Фото профиля успешно обновлено!"
                    popUpFailureMessage="Фото не загружено"
                    action={handleSubmit}
                    setCompleted={setCompleted}
                />
            </List>
        </ChangeAvatarStyled>
    )
}

export default ChangeAvatar
