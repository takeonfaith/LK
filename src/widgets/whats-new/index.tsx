import { Button, Title } from '@ui/atoms'
import { DotPages } from '@ui/molecules'
import limitNumber from '@utils/limit-number'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { WhatsNewTemplate } from './ui'
import { BiNotification, BiRuble } from 'react-icons/bi'
import { Colors } from '@consts'
import { userModel } from '@entities/user'

const WhatsNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 500px;
        height: 500px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`

const WhatsNew = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const { close } = useModal()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const pages = [
        <WhatsNewTemplate
            key={0}
            list={[
                { icon: <BiRuble />, title: 'В оплаты добавлен график платежей', color: 'pink' },
                {
                    icon: <BiNotification />,
                    title: 'Добавлен раздел Кадровые Уведомления',
                    color: 'blue',
                    visible: user?.user_status === 'staff',
                },
            ]}
        />,
    ]

    return (
        <WhatsNewWrapper>
            <Title size={2}>Что нового</Title>
            <div className="content">{pages[currentPage]}</div>
            <DotPages amount={pages.length} current={currentPage} />
            <div className="buttons">
                <Button
                    onClick={() => setCurrentPage((prev) => limitNumber(prev - 1, pages.length - 1))}
                    text="Назад"
                    width="100%"
                    isActive={currentPage !== 0}
                />
                {currentPage === pages.length - 1 ? (
                    <Button
                        onClick={close}
                        text="Готово"
                        width="100%"
                        background={Colors.blue.light}
                        textColor="#fff"
                    />
                ) : (
                    <Button
                        onClick={() => setCurrentPage((prev) => limitNumber(prev + 1, pages.length - 1))}
                        text="Далее"
                        width="100%"
                    />
                )}
            </div>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
