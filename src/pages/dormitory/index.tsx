import PageBlock from '@shared/ui/page-block'
import { FileLink, Message } from '@ui/atoms'
import React from 'react'

const DormitoryPage = () => {
    return (
        <PageBlock>
            <Message title="Уважаемые студенты!" type="info">
                <p>
                    В данном разделе представлен порядок предоставления мест в студенческом городке Московского городке
                    Московского Политеха с указанием актуального списка нуждающихся в общежитии.
                </p>
            </Message>
            <FileLink
                type={'document'}
                link={
                    'https://vk.com/away.php?to=https%3A%2F%2Fe.mospolytech.ru%2Fold%2Fstorage%2Ffiles%2FDormitory_actual_list.pdf&cc_key='
                }
                title={'Актуальный список'}
            />
        </PageBlock>
    )
}

export default DormitoryPage
