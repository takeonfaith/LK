import { Colors } from '@consts'
import { Button, Divider, InfoMessage, LoadFileButton } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import React from 'react'
import { FiMinusCircle, FiPlusCircle, FiSave } from 'react-icons/fi'
import { HiOutlineCheckCircle, HiOutlinePencil } from 'react-icons/hi'
import useInputArea from './lib/use-input-area'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from './model'
import { UniversalInput, InputAreaWrapper, AreaTitle } from './ui'

//TODO: Should be rewritten as HOC, inputs should be children props
const InputArea = ({
    title,
    hint,
    data,
    optionalCheckbox,
    documents,
    setData,
    confirmed,
    optional = false,
    addNew = false,
    divider,
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
    } = useInputArea({ documents, optionalCheckbox, data, setData, optional, confirmed })
    return (
        <>
            <InputAreaWrapper
                openArea={openArea}
                amount={data.length}
                withLoadDoc={!!documents && changeInputArea}
                hint={changeInputArea ? hint?.length ?? 0 : 0}
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
                    {optionalCheckbox && (
                        <Checkbox
                            text={optionalCheckbox.title}
                            isActive={changeInputArea}
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
