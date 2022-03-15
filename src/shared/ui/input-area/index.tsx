import { Colors } from '@consts'
import { Button, Divider, FileLink, LoadFileButton, Message } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import React from 'react'
import { FiAlertCircle, FiInfo, FiMinusCircle, FiPlusCircle, FiSave } from 'react-icons/fi'
import { HiOutlineCheckCircle, HiOutlinePencil } from 'react-icons/hi'
import useInputArea from './lib/use-input-area'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from './model'
import { AreaTitle, InputAreaWrapper, UniversalInput } from './ui'

//TODO: Should be rewritten as HOC, inputs should be children props
const InputArea = ({
    title,
    hint,
    alert,
    data,
    optionalCheckbox,
    documents,
    setData,
    confirmed,
    optional = false,
    addNew = false,
    divider,
    collapsed,
    links,
}: IInputArea & { setData: React.Dispatch<React.SetStateAction<IInputArea>>; divider?: boolean }) => {
    //TODO: rewrite, this hook binds the inputs and their wrapper too much, so I can't quickly rewrite
    const {
        openArea,
        changeInputArea,
        included,
        setOpenArea,
        setIncluded,
        setChangeInputArea,
        handleRemove,
        handleAddNew,
        handleLoadFiles,
        handleConfirm,
        handleCheckbox,
    } = useInputArea({ documents, optionalCheckbox, data, setData, optional, collapsed })
    return (
        <>
            <InputAreaWrapper
                openArea={openArea}
                amount={
                    data.length +
                    (data as IInputAreaData[]).reduce((acc, item) => {
                        if (item.type === 'checkbox-docs') acc += item.items?.length ?? 0
                        return acc
                    }, 0) /
                        2
                }
                withLoadDoc={!!documents && changeInputArea}
                hint={changeInputArea ? hint?.length ?? 0 : 0}
                addNew={addNew && changeInputArea}
                optionalCheckbox={!!optionalCheckbox && (optionalCheckbox.visible ?? true)}
            >
                <AreaTitle
                    title={title}
                    included={included}
                    optional={optional}
                    confirmed={confirmed}
                    setOpenArea={setOpenArea}
                    setIncluded={setIncluded}
                    collapsed={collapsed}
                />
                <div className="inputs">
                    <Message type="alert" visible={!!alert?.length} title={'Внимание'} icon={<FiAlertCircle />}>
                        {alert}
                    </Message>
                    <Message
                        type="info"
                        visible={!!hint && (changeInputArea || confirmed === undefined)}
                        title={'Как заполнить'}
                        icon={<FiInfo />}
                    >
                        {hint}
                    </Message>
                    {!Array.isArray(data[0])
                        ? (data as IInputAreaData[]).map((attr, index) => {
                              // TODO: Remove UniversalInput, inputs performing different tasks should be different components
                              return (
                                  <UniversalInput
                                      key={index}
                                      documents={documents}
                                      changeInputArea={changeInputArea && !optionalCheckbox?.value}
                                      setData={setData}
                                      indexI={index}
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
                                                  key={j}
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
                            maxFiles={documents.maxFiles}
                            isActive={
                                documents.checkboxCondition
                                    ? documents.checkboxCondition === 'straight'
                                        ? !!optionalCheckbox?.value
                                        : !optionalCheckbox?.value
                                    : true
                            }
                        />
                    )}
                    {links?.length &&
                        links.map((link) => {
                            return <FileLink {...link} key={link.title} />
                        })}
                    {optionalCheckbox && (optionalCheckbox.visible ?? true) && (
                        <Checkbox
                            text={optionalCheckbox.title}
                            isActive={optionalCheckbox.editable || changeInputArea}
                            checked={optionalCheckbox.value}
                            setChecked={handleCheckbox}
                        />
                    )}
                    {confirmed !== undefined && (
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
            {divider && <Divider />}
        </>
    )
}

export default InputArea
