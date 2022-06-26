import { FileInputProps } from '@ui/file-input'
import React, { useRef, useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import loadFiles from './lib/load-files'
import DragAndDropAreaWrapper from './style'

type Props = FileInputProps

const DragAndDropArea = ({ files, maxFiles, setFiles, isActive }: Props) => {
    const fileInputRef = useRef(null)
    const [showPulse, setShowPulse] = useState(false)

    const filesSelectedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const loadedFiles = e.target.files as FileList

        if (loadedFiles?.length) {
            setFiles(loadFiles(loadedFiles, files, maxFiles))
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(false)
        const loadedFiles = e.dataTransfer.files

        if (loadedFiles.length) {
            setFiles(loadFiles(loadedFiles, files, maxFiles))
        }
    }

    const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setShowPulse(false)
    }
    return (
        <DragAndDropAreaWrapper
            isActive={isActive}
            showPulse={showPulse}
            onDragOver={(e) => isActive && handleDragOver(e)}
            onDragEnter={(e) => isActive && handleDragEnter(e)}
            onDragLeave={(e) => isActive && handleDragLeave(e)}
            onDrop={(e) => isActive && handleDrop(e)}
            topPadding={!!maxFiles}
        >
            <div className="info">
                <span className="info-item">Макс. размер файла: 15 MB</span>
                {maxFiles && <span className="info-item">Макс. файлов: {maxFiles}</span>}
            </div>
            <input type="file" name="" id="" ref={fileInputRef} onChange={filesSelectedHandle} />
            <div className="message">
                <FiUploadCloud />
                <b>Нажмите сюда или перетащите файл</b>
            </div>
        </DragAndDropAreaWrapper>
    )
}

export default DragAndDropArea
