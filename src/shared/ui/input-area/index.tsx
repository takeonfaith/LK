import { Colors } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'
import { Button, InfoMessage, LoadFileButton } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import React, { useEffect, useState } from 'react'
import { FiMinusCircle, FiPlusCircle, FiSave } from 'react-icons/fi'
import { HiOutlineCheckCircle, HiOutlinePencil } from 'react-icons/hi'
import styled from 'styled-components'
import { AreaTitle } from './ui'
import { UniversalInput } from './ui/molecules'

const InputAreaWrapper = styled.div<{
    openArea: boolean
    amount: number
    withLoadDoc: boolean
    hint: boolean
    addNew: boolean
    optionalCheckbox: boolean
}>`
    display: flex;
    flex-direction: column;
    transition: 0.2s row-gap;
    row-gap: ${({ openArea }) => (openArea ? '15px' : '0')};

    .inputs {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        transition: 0.2s height, 0.2s opacity, 0.2s visibility;
        height: ${({ openArea, amount, withLoadDoc, hint, addNew, optionalCheckbox }) =>
            openArea
                ? amount * 57 +
                  36 +
                  15 * amount -
                  1 +
                  (addNew ? 80 : 0) +
                  (withLoadDoc ? 150 : 0) +
                  (hint ? 50 : 0) +
                  (optionalCheckbox ? 80 : 0) +
                  'px'
                : '0'};
        opacity: ${({ openArea }) => (openArea ? '1' : '0')};
        visibility: ${({ openArea }) => (openArea ? 'visible' : 'hidden')};
        .buttons {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .data-line {
            display: flex;
            align-items: flex-end;
            column-gap: 5px;
        }
    }
`

export interface IInputAreaData {
    title: string
    value: string | SelectPage | boolean
    type?: 'select' | 'text' | 'tel' | 'email' | 'date' | 'checkbox'
    items?: SelectPage[]
    width?: string
    required?: boolean
}

export type IComplexInputAreaData = IInputAreaData[][]

export interface IInputArea {
    title: string
    hint?: string
    data: IInputAreaData[] | IComplexInputAreaData
    default?: IInputAreaData[] | IComplexInputAreaData
    confirmed?: boolean
    optional?: boolean
    documents?: { files: File[]; required: boolean }
    addNew?: boolean
    optionalCheckbox?: { value: boolean; title: string; required?: boolean; fileNeeded?: boolean }
}

const InputArea = ({
    title,
    hint,
    data,
    optionalCheckbox,
    documents,
    setData,
    optional = false,
    confirmed = false,
    addNew = false,
}: IInputArea & { setData: React.Dispatch<React.SetStateAction<IInputArea>> }) => {
    const [changeInputArea, setChangeInputArea] = useState(false)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)

    const handleConfirm = () => {
        if (!Array.isArray(data[0])) {
            if (!documents) {
                if (
                    (optionalCheckbox?.value && optionalCheckbox.required) ||
                    !(data as IInputAreaData[]).find((el) => !el.value && el.required)
                ) {
                    setData((area: IInputArea) => {
                        area.confirmed = true
                        return { ...area }
                    })
                    setChangeInputArea(false)
                    setOpenArea(false)
                } else {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Не все необходимые поля заполнены',
                        type: 'failure',
                        time: 5000,
                    })
                }
            } else {
                if (!optionalCheckbox?.required) {
                    if (
                        (!changeInputArea && !(data as IInputAreaData[]).find((el) => !el.value && el.required)) ||
                        (optionalCheckbox?.value && !documents.required) ||
                        documents.files.length ||
                        !documents.required
                    ) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message: 'Необходимо загрузить файл',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                } else {
                    if ((documents.files.length && documents.required) || optionalCheckbox.value) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message:
                                'Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                }
            }
        } else {
            if (!documents) {
                if (
                    (optionalCheckbox?.value && optionalCheckbox.required) ||
                    !(data as IComplexInputAreaData).find((arr) => !!arr.find((el) => !el.value && el.required))
                ) {
                    setData((area: IInputArea) => {
                        area.confirmed = true
                        return { ...area }
                    })
                    setChangeInputArea(false)
                    setOpenArea(false)
                } else {
                    popUpMessageModel.events.evokePopUpMessage({
                        message: 'Не все необходимые поля заполнены',
                        type: 'failure',
                        time: 5000,
                    })
                }
            } else {
                if (!optionalCheckbox?.required) {
                    if (
                        (!changeInputArea &&
                            !(data as IComplexInputAreaData).find(
                                (arr) => !!arr.find((el) => !el.value && el.required),
                            )) ||
                        (optionalCheckbox?.value && !documents.required) ||
                        documents.files.length ||
                        !documents.required
                    ) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message: 'Необходимо загрузить файл',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                } else {
                    if ((documents.files.length && documents.required) || optionalCheckbox.value) {
                        setData((area: IInputArea) => {
                            area.confirmed = true
                            return { ...area }
                        })
                        setChangeInputArea(false)
                        setOpenArea(false)
                    } else {
                        popUpMessageModel.events.evokePopUpMessage({
                            message:
                                'Необходимо загрузить файл. Если у вас нет соответствующего документа, отметье это галочкой',
                            type: 'failure',
                            time: 5000,
                        })
                    }
                }
            }
        }
    }

    const handleAddNew = () => {
        setData((area: IInputArea) => {
            console.log(area.default)

            const newFields = (area.default as IComplexInputAreaData)[0].map(
                (field): IInputAreaData => ({
                    title: field.title,
                    value: field.type === 'select' && field?.items ? field?.items?.[0] : '',
                    type: field.type,
                    items: field.items,
                    width: field.width,
                    required: field.required,
                }),
            )

            return { ...area, data: [...area.data, newFields] as IComplexInputAreaData }
        })
    }

    // console.log(data)

    const handleRemove = (i: number) => {
        setData((area: IInputArea) => {
            const newFields = (area.data as IComplexInputAreaData).filter((_, index) => i !== index)

            return { ...area, data: newFields }
        })
    }

    const handleLoadFiles = (files: File[]) => {
        setData((area) => {
            if (area.documents) area.documents.files = [...files]
            return { ...area }
        })
    }

    const handleCheckbox = (value: boolean) => {
        // TODO: FIX
        if (optionalCheckbox) optionalCheckbox.value = !optionalCheckbox.value

        setData((area) => ({ ...area, optionalCheckbox }))
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
            withLoadDoc={!!documents && changeInputArea}
            hint={!!hint && changeInputArea}
            addNew={addNew && changeInputArea}
            optionalCheckbox={!!optionalCheckbox}
        >
            <AreaTitle
                title={title}
                included={included}
                optional={optional}
                confirmed={confirmed}
                setOpenArea={setOpenArea}
                setIncluded={setIncluded}
            />
            <div className="inputs">
                <InfoMessage condition={!!hint && changeInputArea} title={'Как заполнить'} text={hint} />
                {!Array.isArray(data[0])
                    ? (data as IInputAreaData[]).map((attr, i) => {
                          return (
                              <UniversalInput
                                  key={i}
                                  documents={documents}
                                  changeInputArea={changeInputArea && !optionalCheckbox?.value}
                                  setData={setData}
                                  indexI={i}
                                  {...attr}
                              />
                          )
                      })
                    : (data as IComplexInputAreaData).map((el, i) => {
                          return (
                              <div className="data-line" key={i}>
                                  {el.map((attr, j) => {
                                      return (
                                          <UniversalInput
                                              key={i}
                                              documents={documents}
                                              changeInputArea={changeInputArea && !optionalCheckbox?.value}
                                              setData={setData}
                                              indexI={i}
                                              indexJ={j}
                                              {...attr}
                                          />
                                      )
                                  })}

                                  {changeInputArea && addNew && (
                                      <Button
                                          icon={<FiMinusCircle />}
                                          textColor={Colors.red.main}
                                          onClick={() => handleRemove(i)}
                                          background="transparent"
                                          isActive={!optionalCheckbox?.value}
                                      />
                                  )}
                              </div>
                          )
                      })}
                {addNew && changeInputArea && (
                    <Button
                        icon={<FiPlusCircle />}
                        text="Добавить"
                        onClick={handleAddNew}
                        background="transparent"
                        isActive={!optionalCheckbox?.value}
                    />
                )}
                {!!documents && changeInputArea && (
                    <LoadFileButton
                        label={''}
                        files={documents.files}
                        setFiles={(files: File[]) => handleLoadFiles(files)}
                        maxFileSizeInBytes={0}
                    />
                )}
                {optionalCheckbox && (
                    <Checkbox
                        text={optionalCheckbox.title}
                        isActive={changeInputArea}
                        checked={optionalCheckbox.value}
                        setChecked={(value: boolean) => handleCheckbox(value)}
                    />
                )}
                {!!confirmed !== undefined && (
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
                                    <Button
                                        onClick={() => setChangeInputArea(false)}
                                        text="Отменить"
                                        icon={<HiOutlinePencil />}
                                        textColor={Colors.red.main}
                                        background={Colors.red.transparent}
                                        width="100%"
                                    />
                                </>
                            )
                        ) : (
                            <Button
                                onClick={() =>
                                    setData((area: IInputArea) => {
                                        area.confirmed = false
                                        return { ...area }
                                    })
                                }
                                text="Отменить"
                                icon={<HiOutlinePencil />}
                                textColor={Colors.red.main}
                                background={Colors.red.transparent}
                                width="100%"
                            />
                        )}
                    </div>
                )}
            </div>
        </InputAreaWrapper>
    )
}

export default InputArea
