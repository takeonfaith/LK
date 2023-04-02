import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import { Colors } from '@consts'
import { Line } from '@ui/timeline/ui'
import InputArea from '@ui/input-area'

type HiddenProps = {
    reached?: boolean
    current: boolean
}

const StepCircle = styled.div<HiddenProps>`
    color: #fff;
    cursor: pointer;
    background: ${({ reached }) => (reached ? Colors.green.main : Colors.grey.main)};
    outline: 6px solid
        ${({ reached, current }) =>
            current ? Colors.blue.transparent1 : reached ? Colors.green.transparent3 : Colors.grey.transparent3};
    min-width: 30px;
    min-height: 30px;
    margin: 6px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: bold;
`

const ListStepForm = styled.div`
    display: flex;
    margin-bottom: -20px;
`

const ElementControlStepForm = styled.div<{ lastElement?: boolean }>`
    width: ${({ lastElement }) => (lastElement ? '42px' : `100%`)};
    display: flex;
    align-items: center;
`

type ReachedT = {
    [key: number]: boolean
}

type DataForStepByStep = {
    dataForm: IInputArea
    setDataForm: React.Dispatch<React.SetStateAction<IInputArea>>
}

type Props = {
    stagesConfig: DataForStepByStep[][]
}

const StepByStepForm = ({ stagesConfig }: Props) => {
    const [indexActiveForm, setIndexActiveForm] = useState<number>(0)
    const [listReached, setListReached] = useState<ReachedT>({})
    useEffect(() => {
        changeStep(0)
    }, [])

    const changeStep = (indexAnotherStep: number) => {
        setListReached((prevState) => ({
            ...prevState,
            // [indexActiveForm]: checkFormFields(children[indexActiveForm].props),
            [indexActiveForm]: true,
        }))
        setIndexActiveForm(indexAnotherStep)
    }
    return (
        <>
            <ListStepForm>
                {stagesConfig.map((item, key: number) => (
                    <ElementControlStepForm lastElement={key === stagesConfig.length - 1} key={key}>
                        <StepCircle
                            current={key === indexActiveForm}
                            onClick={() => changeStep(key)}
                            reached={listReached[key]}
                        >
                            {key + 1}
                        </StepCircle>
                        {key !== stagesConfig.length - 1 && (
                            <Line direction={'horizontal'} reached={listReached[key]} filled={100} distance={40} />
                        )}
                    </ElementControlStepForm>
                ))}
            </ListStepForm>
            <>
                {stagesConfig[indexActiveForm].map((item, key) => (
                    <InputArea {...item.dataForm} setData={item.setDataForm} key={key} />
                ))}
            </>
        </>
    )
}

export default StepByStepForm
