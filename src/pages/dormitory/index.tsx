import { FileLink, Message, Title } from '@ui/atoms'
import React from 'react'
import Block from '@ui/block'
import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
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
                        В данном разделе представлен порядок предоставления мест в студенческом городке Московского
                        городке Московского Политеха с указанием актуального списка нуждающихся в общежитии.
                    </p>
                </Message>
                <FileLink
                    type={'document'}
                    link={
                        'https://vk.com/away.php?to=https%3A%2F%2Fe.mospolytech.ru%2Fold%2Fstorage%2Ffiles%2FDormitory_actual_list.pdf&cc_key='
                    }
                    title={'Актуальный список'}
                />
            </Block>
        </PageWrapper>
    )
}

export default DormitoryPage
