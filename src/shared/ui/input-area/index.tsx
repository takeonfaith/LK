import { Colors, FileFormats } from '@consts'
import { Button, Divider, FileLink, Message } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import FileInput from '@ui/file-input'
import React from 'react'
import { FiAlertCircle, FiInfo, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { LoadedState } from 'widgets/template-form'
import useInputArea from './lib/use-input-area'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from './model'
import { AreaTitle, InputAreaWrapper, UniversalInput } from './ui'
import Buttons from './ui/organisms/buttons'
type SetData =
    | React.Dispatch<React.SetStateAction<IInputArea | null>>
    | React.Dispatch<React.SetStateAction<IInputArea>>

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
    specialFieldsName,
}: IInputArea & { setData: SetData; divider?: boolean }) => {
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
    } = useInputArea({
        documents,
        optionalCheckbox,
        data,
        setData: setData as React.Dispatch<React.SetStateAction<IInputArea>>,
        optional,
        collapsed,
        confirmed,
    })
    return (
        <>
            <InputAreaWrapper openArea={openArea}>
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
                    <Message type="alert" visible={!!alert} icon={<FiAlertCircle />}>
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
                                      setData={setData as LoadedState}
                                      indexI={index}
                                      specialFieldsNameConfig={specialFieldsName}
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
                                                  setData={setData as LoadedState}
                                                  indexI={i}
                                                  indexJ={j}
                                                  specialFieldsNameConfig={specialFieldsName}
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
                        <FileInput
                            files={documents.files}
                            setFiles={(files: File[]) => handleLoadFiles(files)}
                            maxFileSizeInMegaBytes={documents.maxFileSizeInMegaBytes}
                            maxFiles={documents.maxFiles}
                            formats={documents.allowedTypes as FileFormats}
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
                    <Checkbox
                        visible={!!optionalCheckbox && (optionalCheckbox.visible ?? true)}
                        text={optionalCheckbox?.title}
                        isActive={optionalCheckbox?.editable || changeInputArea}
                        checked={optionalCheckbox?.value ?? false}
                        setChecked={handleCheckbox}
                    />
                    <Buttons
                        confirmed={confirmed}
                        changeInputArea={changeInputArea}
                        setData={setData as LoadedState}
                        setChangeInputArea={setChangeInputArea}
                        handleConfirm={handleConfirm}
                    />
                </div>
            </InputAreaWrapper>
            {divider && <Divider />}
        </>
    )
}

export default InputArea
