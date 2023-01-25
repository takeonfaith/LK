import { FileInputProps } from '@ui/file-input'
import React, { useRef, useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import loadFiles from './lib/load-files'
import DragAndDropAreaWrapper from './style'

type Props = FileInputProps

const DragAndDropArea = ({ files, maxFiles, setFiles, isActive, allowedTypes }: Props) => {
    const fileInputRef = useRef(null)
    const [showPulse, setShowPulse] = useState(false)

    const filesSelectedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const loadedFiles = e.target.files as FileList

        if (loadedFiles?.length) {
            setFiles(loadFiles(loadedFiles, files, maxFiles, allowedTypes))
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
            setFiles(loadFiles(loadedFiles, files, maxFiles, allowedTypes))
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
                <span className="info-item">Макс. размер файла: 10 MB</span>
                {maxFiles && <span className="info-item">Макс. файлов: {maxFiles}</span>}
                <span className="info-item">
                    Форматы: {!allowedTypes ? 'jpg, png, pdf' : allowedTypes.map((t) => t.split('/')[1]).join(', ')}
                </span>
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
