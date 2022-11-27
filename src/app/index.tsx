import useTheme from '@utils/hooks/use-theme'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    height: 100vh;
`

const App = () => {
    useTheme()

    return (
        <ModalProvider>
            <BrowserRouter basename="/">
                <Background>
                    <Router />
                </Background>
            </BrowserRouter>
        </ModalProvider>
    )
}

export default App
