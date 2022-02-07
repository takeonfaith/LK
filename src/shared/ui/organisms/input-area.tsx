import { Colors } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import Select, { SelectPage } from '@features/select'
import { Button, Input, LoadFileButton, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import Tooltip from '@ui/atoms/tooltip'
import { SwitchToggle } from '@ui/molecules'
import React, { useEffect, useState } from 'react'
import { FiPlusCircle, FiSave, FiInfo, FiMinusCircle } from 'react-icons/fi'
import { HiChevronDown, HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlinePencil } from 'react-icons/hi'
import styled from 'styled-components'

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
        border: 2px solid ${Colors.blue.main};
        color: var(--text);
        border-radius: var(--brLight);
    }

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
    }
`

export interface IInputArea {
    id: number
    title: string
    value: string | SelectPage | boolean
    type?: 'select' | 'text' | 'tel' | 'email' | 'date' | 'checkbox'
    items?: SelectPage[]
    width?: string
}

export type IComplexInputArea = IInputArea[][]

interface Props {
    title: string
    hint?: string
    data: IInputArea[] | IComplexInputArea
    confirmed?: boolean
    setConfirmed?: React.Dispatch<React.SetStateAction<boolean>>
    setData: React.Dispatch<React.SetStateAction<any>>
    optional?: boolean
    loadDoc?: boolean
    addNew?: boolean
    optionalCheckbox?: { value: boolean; setValue: (value: boolean) => void; title: string; fileNeeded?: boolean }
}

const InputArea = ({
    title,
    hint,
    data,
    setData,
    setConfirmed,
    optionalCheckbox,
    optional = false,
    confirmed = false,
    loadDoc = false,
    addNew = false,
}: Props) => {
    const [changeInputArea, setChangeInputArea] = useState(false)
    const [openArea, setOpenArea] = useState(true)
    const [included, setIncluded] = useState(false)
    const [files, setFiles] = useState<File[]>([])

    const handleChangeValue = (value: string | boolean, i: number, j?: number) => {
        if (!Array.isArray(data[0])) {
            ;(data[i] as IInputArea).value = value
        } else {
            ;(data as IComplexInputArea)[i][j ?? 0].value = value
        }

        setData([...data])
    }

    const handleChangeSelect = (page: SelectPage, i: number, j?: number) => {
        if (!Array.isArray(data[0])) {
            ;(data[i] as IInputArea).value = page
        } else {
            ;(data as IComplexInputArea)[i][j ?? 0].value = page
        }
        setData([...data])
    }

    const handleConfirm = () => {
        if (
            setConfirmed &&
            (optionalCheckbox?.value ||
                loadDoc ||
                !(data as IInputArea[]).find((el) => (el.value as string).length === 0))
        ) {
            if (
                loadDoc &&
                !files.length &&
                optionalCheckbox?.fileNeeded &&
                (optionalCheckbox?.value || !optionalCheckbox?.value)
            ) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Необходимо загрузить документы, подтверждающие изменения',
                    type: 'failure',
                    time: 5000,
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
        if (Array.isArray(data[0])) {
            setData((prev: IComplexInputArea) => [
                ...prev,
                [
                    ...prev[0].map((el) => ({
                        title: el.title,
                        items: el.items,
                        value: el.type === 'select' ? el.items?.[0] : '',
                        type: el.type,
                        width: el.width,
                    })),
                ],
            ])
        } else {
            setData((prev: IInputArea[]) => [
                ...prev,
                {
                    title: prev[0].title,
                    items: prev[0].items,
                    value: prev[0].type === 'select' ? prev[0].items?.[0] : '',
                    type: prev[0].type,
                    width: prev[0].width,
                },
            ])
        }
    }

    const handleRemove = (i: number) => {
        setData((prev: IComplexInputArea) => {
            return prev.filter((_, index) => index !== i)
        })
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
            addNew={addNew && changeInputArea}
            optionalCheckbox={!!optionalCheckbox}
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
                    {optional && <Checkbox checked={included} setChecked={setIncluded} />}
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
                {!Array.isArray(data[0])
                    ? (data as IInputArea[]).map(({ id, title, value, type, items, width }, i) => {
                          return type !== 'select' || !items ? (
                              type === 'checkbox' ? (
                                  <Checkbox
                                      text={title}
                                      isActive={changeInputArea && !loadDoc}
                                      checked={value as boolean}
                                      setChecked={(value) => handleChangeValue(!value, i)}
                                  />
                              ) : (
                                  <Input
                                      value={value as string}
                                      title={title}
                                      setValue={(value) => handleChangeValue(value, i)}
                                      key={id}
                                      type={type}
                                      isActive={changeInputArea && !loadDoc}
                                      inputAppearance={changeInputArea && !loadDoc}
                                      placeholder={title}
                                  />
                              )
                          ) : (
                              <Select
                                  items={items}
                                  setSelected={(value) => handleChangeSelect(value as SelectPage, i)}
                                  selected={value as SelectPage}
                                  isActive={changeInputArea && !loadDoc}
                                  title={title}
                                  key={id}
                                  width={width}
                              />
                          )
                      })
                    : (data as IComplexInputArea).map((el, i) => {
                          return (
                              <div className="data-line" key={i}>
                                  {el.map(({ id, title, value, type, items, width }, j) => {
                                      return type !== 'select' || !items ? (
                                          <Input
                                              value={value as string}
                                              title={title}
                                              setValue={(value) => handleChangeValue(value, i, j)}
                                              key={id}
                                              type={type}
                                              isActive={changeInputArea && !loadDoc}
                                              inputAppearance={changeInputArea && !loadDoc}
                                              placeholder={title}
                                          />
                                      ) : (
                                          <Select
                                              items={items}
                                              setSelected={(value) => handleChangeSelect(value as SelectPage, i, j)}
                                              selected={value as SelectPage}
                                              isActive={changeInputArea && !loadDoc}
                                              title={title}
                                              key={id}
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
                {loadDoc && changeInputArea && (
                    <LoadFileButton label={''} files={files} setFiles={setFiles} maxFileSizeInBytes={0} />
                )}
                {optionalCheckbox && (
                    <Checkbox
                        text={optionalCheckbox.title}
                        isActive={changeInputArea}
                        checked={optionalCheckbox.value}
                        setChecked={optionalCheckbox.setValue}
                    />
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
            </div>
        </InputAreaWrapper>
    )
}

export default InputArea
