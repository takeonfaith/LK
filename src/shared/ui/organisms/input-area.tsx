import { Colors } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import Select, { SelectPage } from '@features/select'
import { Button, Input, LoadFileButton, Title } from '@ui/atoms'
import Tooltip from '@ui/atoms/tooltip'
import { SwitchToggle } from '@ui/molecules'
import React, { useEffect, useState } from 'react'
import { FiPlusCircle, FiSave, FiInfo } from 'react-icons/fi'
import { HiChevronDown, HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlinePencil } from 'react-icons/hi'
import styled from 'styled-components'

const InputAreaWrapper = styled.div<{ openArea: boolean; amount: number; withLoadDoc: boolean; hint: boolean }>`
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({ openArea }) => (openArea ? '15px' : '0')};
    .area-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
        cursor: pointer;
        position: sticky;
        top: -2px;
        background: var(--schedule);
        z-index: 3;
    }

    .title-and-icon {
        display: flex;
        align-items: center;

        h4 {
            margin-right: 10px;
        }

        .icon {
            margin-right: 10px;
            display: flex;
            align-items: center;
            svg {
                width: 18px;
                height: 18px;
            }
        }

        .icon.success {
            color: var(--green);
        }

        .icon.failure {
            color: var(--red);
        }
    }

    .hint {
        font-size: 0.8em;
        opacity: 0.7;
        padding: 10px;
        background: var(--almostTransparentOpposite);
        border-radius: var(--brLight);
    }

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({ openArea, amount, withLoadDoc, hint }) =>
            openArea
                ? withLoadDoc
                    ? amount * 57 + 36 + 15 * amount - 1 + 150 + (hint ? 50 : 0) + 'px'
                    : amount * 57 + 36 + 15 * amount - 1 + (hint ? 50 : 0) + 'px'
                : '0'};
        opacity: ${({ openArea }) => (openArea ? '1' : '0')};
        visibility: ${({ openArea }) => (openArea ? 'visible' : 'hidden')};
        .buttons {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`

export interface IInputArea {
    title: string
    value: string | SelectPage
    type?: 'select' | 'text' | 'tel' | 'email' | 'date'
    items?: SelectPage[]
    width?: string
}

interface Props {
    title: string
    hint?: string
    data: IInputArea[]
    confirmed?: boolean
    setConfirmed?: React.Dispatch<React.SetStateAction<boolean>>
    setData: React.Dispatch<React.SetStateAction<IInputArea[]>>
    optional?: boolean
    loadDoc?: boolean
    addNew?: boolean
}

const InputArea = ({
    title,
    hint,
    data,
    setData,
    setConfirmed,
    optional = false,
    confirmed = false,
    loadDoc = false,
    addNew = false,
}: Props) => {
    const [changeInputArea, setChangeInputArea] = useState(false)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)
    const [files, setFiles] = useState<File[]>([])

    const handleChangeValue = (value: string, i: number) => {
        data[i].value = value

        setData([...data])
    }

    const handleChangeSelect = (page: SelectPage, i: number) => {
        data[i].value = page
        setData([...data])
    }

    const handleConfirm = () => {
        if (setConfirmed && !data.find((el) => (el.value as string).length === 0)) {
            if (loadDoc && !files.length) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Необходимо загрузить документы, подтверждающие изменения',
                    type: 'failure',
                })
            } else {
                setConfirmed(true)
                setChangeInputArea(false)
                setOpenArea(false)
            }
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Все поля должны быть заполнены, чтобы продолжить дальше',
                type: 'failure',
            })
        }
    }

    const handleAddNew = () => {
        // TODO: fix when adding new fields, React thinks they are the same, so chaning one instantly changes the other
        setData((prev: IInputArea[]) => [...prev, ...data])
    }

    useEffect(() => {
        if (!included && optional) {
            setOpenArea(false)
        } else {
            setOpenArea(true)
        }
    }, [included])

    return (
        <InputAreaWrapper
            openArea={openArea}
            amount={data.length}
            withLoadDoc={loadDoc && changeInputArea}
            hint={!!hint && changeInputArea}
        >
            <div className="area-title" onClick={() => (included || !optional) && setOpenArea((prev) => !prev)}>
                <div className="title-and-icon">
                    {confirmed ? (
                        <span className="icon success">
                            <HiOutlineCheckCircle />
                        </span>
                    ) : (
                        <span className="icon failure">
                            <HiOutlineExclamationCircle />
                        </span>
                    )}
                    <Title size={4} align="left">
                        {title}
                    </Title>
                    {optional && (
                        <SwitchToggle
                            key={title}
                            id={title}
                            isToggled={included}
                            setIsToggled={() => setIncluded(!included)}
                        />
                    )}
                </div>
                <Button icon={<HiChevronDown />} onClick={() => null} background="transparent" />
            </div>
            <div className="inputs">
                {hint && changeInputArea && (
                    <div className="hint">
                        <div className="title-and-icon">
                            <Title size={5} align="left" icon={<FiInfo />} bottomGap>
                                Как заполнить
                            </Title>
                        </div>
                        {hint}
                    </div>
                )}
                {data.map(({ title, value, type, items, width }, i) => {
                    return type !== 'select' || !items ? (
                        <Input
                            value={value as string}
                            title={title}
                            setValue={(value) => handleChangeValue(value, i)}
                            key={title + i}
                            type={type}
                            isActive={changeInputArea && !loadDoc}
                        />
                    ) : (
                        <Select
                            items={items}
                            setSelected={(value) => handleChangeSelect(value as SelectPage, i)}
                            selected={value as SelectPage}
                            isActive={changeInputArea && !loadDoc}
                            title={title}
                            key={i}
                            width={width}
                        />
                    )
                })}
                {addNew && changeInputArea && (
                    <Button icon={<FiPlusCircle />} text="Добавить" onClick={handleAddNew} background="transparent" />
                )}
                {!!setConfirmed && (
                    <div className="buttons">
                        {!confirmed ? (
                            !changeInputArea ? (
                                <>
                                    <Button
                                        onClick={handleConfirm}
                                        text="Подтвердить"
                                        icon={<HiOutlineCheckCircle />}
                                        textColor={Colors.lightGreen.main}
                                        background={Colors.lightGreen.transparent}
                                        width="100%"
                                    />
                                    <Button
                                        onClick={() => setChangeInputArea(true)}
                                        text="Изменить"
                                        icon={<HiOutlinePencil />}
                                        textColor={Colors.blue.main}
                                        background={Colors.blue.transparent}
                                        width="100%"
                                    />
                                </>
                            ) : (
                                <>
                                    <Button
                                        onClick={handleConfirm}
                                        text="Сохранить"
                                        icon={<FiSave />}
                                        textColor={Colors.blue.main}
                                        background={Colors.blue.transparent}
                                        width="100%"
                                    />
                                </>
                            )
                        ) : (
                            <Button
                                onClick={() => setConfirmed(false)}
                                text="Отменить"
                                icon={<HiOutlinePencil />}
                                textColor={Colors.red.main}
                                background={Colors.red.transparent}
                                width="100%"
                            />
                        )}
                    </div>
                )}
                {loadDoc && changeInputArea && (
                    <LoadFileButton label={''} files={files} setFiles={setFiles} maxFileSizeInBytes={0} />
                )}
            </div>
        </InputAreaWrapper>
    )
}

export default InputArea
