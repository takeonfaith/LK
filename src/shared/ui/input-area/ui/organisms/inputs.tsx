import { Colors } from '@consts'
import { Button, InfoMessage, Input, LoadFileButton } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from '@ui/input-area'
import ButtonsList from '@ui/molecules/buttons-list'
import React from 'react'
import { FiMinusCircle, FiPlusCircle, FiSave } from 'react-icons/fi'
import { HiOutlineCheckCircle, HiOutlinePencil } from 'react-icons/hi'
import styled from 'styled-components'
import Select, { SelectPage } from '@features/select'
import { popUpMessageModel } from '@entities/pop-up-message'

const InputsWrapper = styled.div<{
    openArea: boolean
    amount: number
    withLoadDoc: boolean
    hint: boolean
    addNew: boolean
    optionalCheckbox: boolean
}>`
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
              (optionalCheckbox ? 70 : 0) +
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
`

interface Props {
    data: IInputAreaData[] | IComplexInputAreaData
    hint?: string
    openArea: boolean
    changeInputArea: boolean
    title: string
    confirmed?: boolean
    optional?: boolean
    documents?: { files: File[]; required: boolean }
    addNew?: boolean
    optionalCheckbox?: { value: boolean; title: string; required?: boolean; fileNeeded?: boolean }
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
    setOpenArea: React.Dispatch<React.SetStateAction<boolean>>
    setChangeInputArea: React.Dispatch<React.SetStateAction<boolean>>
}

const Inputs = ({
    data,
    hint,
    openArea,
    changeInputArea,
    documents,
    confirmed,
    optionalCheckbox,
    setData,
    addNew,
    setOpenArea,
    setChangeInputArea,
}: Props) => {
    const handleChangeValue = (value: string | boolean, i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = value
            } else {
                ;(area.data[i] as IInputAreaData).value = value
            }
            return { ...area }
        })
    }

    const handleCheckbox = (value: boolean) => {
        // TODO: FIX

        setData((area) => {
            if (area.optionalCheckbox) area.optionalCheckbox.value = !optionalCheckbox?.value
            return { ...area }
        })
    }

    const handleChangeSelect = (page: SelectPage, i: number, j?: number) => {
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = page
            } else {
                ;(area.data[i] as IInputAreaData).value = page
            }
            return { ...area }
        })
    }

    const handleRemove = (i: number) => {
        setData((area: IInputArea) => {
            area.data = (area.data as IComplexInputAreaData).filter((_, index) => {
                console.log(_, i)

                return index !== i
            })
            return { ...area }
        })
    }

    const handleAddNew = () => {
        if (Array.isArray(data[0])) {
            setData((area: IInputArea) => {
                const newElements = [
                    ...(area.data[0] as IInputAreaData[]).map(
                        (el) =>
                            ({
                                title: el.title,
                                items: el.items,
                                value: el.type === 'select' ? el.items?.[0] : '',
                                type: el.type,
                                width: el.width,
                            } as IInputAreaData),
                    ),
                ]
                ;(area.data as IComplexInputAreaData) = [...(area.data as IComplexInputAreaData), newElements]
                return { ...area }
            })
        }
    }

    const handleConfirm = () => {
        if (!Array.isArray(data[0])) {
            if (!documents) {
                if (optionalCheckbox?.value || !(data as IInputAreaData[]).find((el) => !el.value && el.required)) {
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
                        !changeInputArea ||
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
                    if (!changeInputArea || (documents.files.length && documents.required) || optionalCheckbox.value) {
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

    const handleLoadFiles = (files: File[]) => {
        setData((area) => {
            if (area.documents) area.documents.files = [...files]
            return { ...area }
        })
    }

    return (
        <InputsWrapper
            openArea={openArea}
            amount={data.length}
            withLoadDoc={!!documents && changeInputArea}
            hint={!!hint && changeInputArea}
            addNew={!!addNew && changeInputArea}
            optionalCheckbox={!!optionalCheckbox}
        >
            <InfoMessage condition={!!hint && !!changeInputArea} title={'Как заполнить'} text={hint} />

            {!Array.isArray(data[0])
                ? (data as IInputAreaData[]).map(({ title, value, type, items, width, required }, i) => {
                      return type !== 'select' || !items ? (
                          type === 'checkbox' ? (
                              <Checkbox
                                  text={title}
                                  isActive={changeInputArea && !documents}
                                  checked={value as boolean}
                                  setChecked={(value) => handleChangeValue(!value, i)}
                              />
                          ) : (
                              <Input
                                  value={value as string}
                                  title={title}
                                  setValue={(value) => handleChangeValue(value, i)}
                                  key={title + i}
                                  type={type}
                                  isActive={changeInputArea && !documents}
                                  inputAppearance={changeInputArea && !documents}
                                  placeholder={title}
                                  required={required}
                              />
                          )
                      ) : (
                          <Select
                              items={items}
                              setSelected={(value) => handleChangeSelect(value as SelectPage, i)}
                              selected={value as SelectPage}
                              isActive={changeInputArea && !documents}
                              title={title}
                              key={title + i}
                              width={width}
                          />
                      )
                  })
                : (data as IComplexInputAreaData).map((el, i) => {
                      return (
                          <div className="data-line" key={i}>
                              {el.map(({ title, value, type, items, width, required }, j) => {
                                  return type !== 'select' || !items ? (
                                      <Input
                                          value={value as string}
                                          title={title}
                                          setValue={(value) => handleChangeValue(value, i, j)}
                                          key={title + i}
                                          type={type}
                                          isActive={changeInputArea && !documents}
                                          inputAppearance={changeInputArea && !documents}
                                          placeholder={title}
                                          required={required}
                                      />
                                  ) : (
                                      <Select
                                          items={items}
                                          setSelected={(value) => handleChangeSelect(value as SelectPage, i, j)}
                                          selected={value as SelectPage}
                                          isActive={changeInputArea && !documents}
                                          title={title}
                                          key={title + i}
                                          width={width}
                                      />
                                  )
                              })}
                              {changeInputArea && addNew && (
                                  <Button
                                      icon={<FiMinusCircle />}
                                      textColor={Colors.red.main}
                                      onClick={() => handleRemove(i)}
                                      background="transparent"
                                  />
                              )}
                          </div>
                      )
                  })}
            {addNew && changeInputArea && (
                <Button icon={<FiPlusCircle />} text="Добавить" onClick={handleAddNew} background="transparent" />
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
            <ButtonsList condition={!!confirmed !== undefined} direction="horizontal">
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
            </ButtonsList>
        </InputsWrapper>
    )
}

export default Inputs
