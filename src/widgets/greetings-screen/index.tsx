import { Colors } from '@consts'
import { Button, CenterPage } from '@ui/atoms'
import List from '@ui/list'
import { ListWrapper } from '@ui/list/styles'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import useOnScreen from '@utils/hooks/use-on-screen'
import React, { useRef } from 'react'
import styled from 'styled-components'

const GreetingsScreenWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--theme);
    z-index: 50;
`

const ContentWrapper = styled(ListWrapper)`
    opacity: 0;
    animation: 0.5s defaultFadeIn forwards;
    animation-delay: 2s;
    height: 100%;
    padding: 20px;
`

const GreetingsScreen = () => {
    const ref = useRef<HTMLDivElement>(null)
    const onScreen = useOnScreen(ref)
    return (
        <GreetingsScreenWrapper ref={ref}>
            <CenterPage>
                {onScreen && (
                    <ContentWrapper horizontalAlign="center" verticalAlign="center">
                        <List height="100%" width="100%" horizontalAlign="center" verticalAlign="center">
                            <Title size={1}>Привет!</Title>
                            <Subtext maxWidth="500px" width="100%" fontSize="1.2em" align="center">
                                Мы (ещё раз) переосмыслили дизайн. Здесь мы коротко пройдемся по нововведениям. Если
                                хотите, вы можете пропустить это обучение
                            </Subtext>
                        </List>
                        <Button
                            text="Далее"
                            background="var(--purpleGradient)"
                            width="220px"
                            height="40px"
                            textColor="#fff"
                        />
                        <Button text="Пропустить" background="transparent" textColor={Colors.grey.main} />
                    </ContentWrapper>
                )}
            </CenterPage>
        </GreetingsScreenWrapper>
    )
}

export default GreetingsScreen
