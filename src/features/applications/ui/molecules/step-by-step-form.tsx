import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import { Colors } from '@consts'
import { Line } from '@ui/timeline/ui'

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

type mmm = {
    [key: number]: boolean
}

const StepByStepForm = ({ children }: any) => {
    const [indexActiveForm, setIndexActiveForm] = useState<number>(0)
    const [list, setList] = useState<mmm>({})
    useEffect(() => {
        changeStep(0)
    }, [])

    const changeStep = (indexAnotherStep: number) => {
        setList((prevState) => ({
            ...prevState,
            [indexActiveForm]: checkFormFields(children[indexActiveForm].props),
        }))
        setIndexActiveForm(indexAnotherStep)
    }
    return (
        <>
            <ListStepForm>
                {children.map((item: IInputArea & { setData: any; divider?: boolean }, key: number) => (
                    <ElementControlStepForm lastElement={key === children.length - 1} key={key}>
                        <StepCircle
                            current={key === indexActiveForm}
                            onClick={() => changeStep(key)}
                            reached={list[key]}
                        >
                            {key + 1}
                        </StepCircle>
                        {key !== children.length - 1 && (
                            <Line direction={'horizontal'} reached={list[key]} filled={100} distance={40} />
                        )}
                    </ElementControlStepForm>
                ))}
            </ListStepForm>
            <>{children[indexActiveForm]}</>
        </>
    )
}

export default StepByStepForm
