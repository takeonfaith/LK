import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { HiOutlineExclamation } from 'react-icons/hi'
import styled from 'styled-components'
import AutoAccordion from '../auto-accordion'
import { Divider } from '../divider'
import { Error } from '../error'
import Flex from '../flex'
import { Message } from '../message'

const ErrorStackWrapper = styled.div`
    max-height: 400px;
    overflow-y: auto;
`

type Props = {
    error: Error
}

export const CodeError = ({ error }: Props) => {
    return (
        <>
            <Error text={error.message} image={<HiOutlineExclamation />}>
                <Flex mw="500px" d="column" gap="16px">
                    <Divider />
                    <AutoAccordion
                        title={
                            <Message
                                type="failure"
                                fontSize="0.95rem"
                                title={
                                    <Flex>
                                        <span>Суть ошибки</span>
                                        <FiChevronDown />
                                    </Flex>
                                }
                            />
                        }
                    >
                        <Message type="failure" fontSize="0.95rem" title={''} icon={''}>
                            <ErrorStackWrapper>{error.stack}</ErrorStackWrapper>
                        </Message>
                    </AutoAccordion>
                </Flex>
            </Error>
        </>
    )
}
