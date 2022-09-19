import { FileLink, Message, Title } from '@ui/atoms'
import React from 'react'
import Block from '@ui/block'
import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 10px;
`

const DormitoryPage = () => {
    return (
        <PageWrapper>
            <Block maxWidth={'725px'} orientation="vertical" gap="10px" height="fit-content" alignItems={'left'}>
                <Title size={3} align="left" bottomGap>
                    Список ожидания на заселение в общежитие
                </Title>
                <Message title="Уважаемые студенты!" type="info">
                    <p>
                        Для удобства Для удобстваДля удобстваДля удобстваДля удобстваДля удобстваДля удобстваДля
                        удобстваДля удобстваДля удобстваДля удобстваДля удобстваДля удобства.
                    </p>
                </Message>
                <FileLink
                    type={'document'}
                    link={'https://e.mospolytech.ru/old/storage/files/matpom_docs.pdf'}
                    title={'Актуальный список'}
                />
            </Block>
        </PageWrapper>
    )
}

export default DormitoryPage
