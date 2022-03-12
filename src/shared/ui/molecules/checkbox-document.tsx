import { LoadFileButton } from '@ui/atoms'
import Checkbox, { CheckboxProps } from '@ui/atoms/checkbox'
import { LoadFileProps } from '@ui/atoms/load-file-button'
import React from 'react'
import styled from 'styled-components'

const CheckboxDocumentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

type Props = { checkbox: CheckboxProps; loadfile: LoadFileProps; docVisible: boolean }

const CheckboxDocument = ({ checkbox, loadfile, docVisible }: Props) => {
    return (
        <CheckboxDocumentWrapper>
            <Checkbox {...checkbox} />
            {docVisible && <LoadFileButton {...loadfile} />}
        </CheckboxDocumentWrapper>
    )
}

export default CheckboxDocument
