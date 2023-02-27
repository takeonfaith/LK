import Subtext from '@shared/ui/subtext'
import { FileInputProps } from '@ui/file-input'
import React, { useRef, useState } from 'react'
import { FcFolder } from 'react-icons/fc'
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
            <input type="file" name="" id="" ref={fileInputRef} onChange={filesSelectedHandle} />
            <div className="message">
                <FcFolder className="front-icon" />
                <div className="icons-behind">
                    <FcFolder className="icon-1" />
                    <FcFolder className="icon-2" />
                </div>
                <b>Нажмите сюда или перетащите файл</b>
                <Subtext align="center">
                    Форматы: {!allowedTypes ? 'jpg, png, pdf' : allowedTypes.map((t) => t.split('/')[1]).join(', ')} •
                    Макс. файлов: {maxFiles}
                </Subtext>
            </div>
        </DragAndDropAreaWrapper>
    )
}

export default DragAndDropArea
