import { LeftBlock, PageWrapper, RightBlock } from '@features/payments'
import { Button, Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const InfoWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const MapWrapper = styled.div`
    border: none;
    outline: none;
    position: relative;
    overflow: hidden;
    border-radius: var(--brSemi);
    height: fit-content;
`

const ButtonList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        height: 250px;
    }
`

const InfoPayments = () => {
    return (
        <PageWrapper>
            <div className="blocks-wrapper">
                <LeftBlock>
                    <Title size={2} align="left">
                        Договорной отдел
                    </Title>
                    <div className="payment-block-content">
                        <InfoWrapper>
                            <h4>Адрес: </h4>
                            <p>ул. Б. Семеновская, 38, А-303</p>
                            <h4>Часы работы:</h4>
                            <p>Пн-Чт: 9.30-18.30</p>
                            <p>Пт: 9.30-17.15</p>
                            <p>Обед: 12.15-13.00</p>
                            <h4>Телефоны:</h4>
                            <p>+7 (495) 223-05-40 или +7 (495) 223-05-23, доб. 1549, 1562, 1563, 1564,1550,1247</p>
                            <h4>E-mail:</h4>
                            <p>oplata@mospolytech.ru</p>
                        </InfoWrapper>
                        <MapWrapper>
                            <a
                                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                            >
                                Москва
                            </a>
                            <a
                                href="https://yandex.ru/maps/213/moscow/house/bolshaya_semyonovskaya_ulitsa_38/Z04YcQZhTEUOQFtvfXt5cH5qZQ==/?ll=37.712714%2C55.781248&utm_medium=mapframe&utm_source=maps&z=17.85"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                            >
                                Большая Семёновская улица, 38 — Яндекс.Карты
                            </a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/-/CCUQyTcGWD"
                                width="100%"
                                height="270"
                                allowFullScreen={true}
                                style={{ position: 'relative' }}
                            ></iframe>
                        </MapWrapper>
                    </div>
                </LeftBlock>
                <RightBlock>
                    <Title size={2} align="left">
                        Реквизиты договора
                    </Title>
                    <ButtonList>
                        <Button
                            onClick={() => null}
                            text="Банковские реквизиты"
                            width={'100%'}
                            background="var(--settings)"
                        />
                        <Button
                            onClick={() => null}
                            text="Блан квитанции оплаты неустойки"
                            width={'100%'}
                            background="var(--settings)"
                        />
                        <Button
                            onClick={() => null}
                            text="Блан квитанции оплаты обучения"
                            width={'100%'}
                            background="var(--settings)"
                        />
                        <Button
                            onClick={() => null}
                            text="Информация об оплате обучения"
                            width={'100%'}
                            background="var(--settings)"
                        />
                    </ButtonList>
                </RightBlock>
            </div>
        </PageWrapper>
    )
}

export default InfoPayments
