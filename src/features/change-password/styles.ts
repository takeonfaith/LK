import styled from 'styled-components'

export const ChangePasswordStyled = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1001px) {
        flex-direction: row;
        width: 620px;
        height: 400px;
    }
`

export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 100%;
    min-width: 280px;
    width: 100%;
`

export const LeftSide = styled.div`
    height: 100%;
    background: var(--theme-mild-xxl);
    border-radius: var(--brLight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TopLeftSide = styled.div`
    height: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const CheckStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: scale(0.9);
`

export const InputsStyled = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
`
