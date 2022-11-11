import { FileInputProps } from '@ui/file-input'
import List from '@ui/list'
import File from './ui/file'
import React from 'react'
import { confirmModel } from '@entities/confirm'

type Props = Pick<FileInputProps, 'files' | 'setFiles'>

const ListOfFiles = ({ files, setFiles }: Props) => {
    return (
        <List
            title="Список файлов"
            visible={!!files.length}
            onDelete={() =>
                confirmModel.events.evokeConfirm({
                    message: 'Вы уверены, что хотите удалить все файлы?',
                    onConfirm: () => setFiles([]),
                })
            }
        >
            {files.map((file) => {
                return <File file={file} files={files} setFiles={setFiles} key={file.name} />
            })}
        </List>
    )
}

export default ListOfFiles
