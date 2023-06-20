import styled from 'styled-components'

const HeaderWrapper = styled.header<{ hidden?: boolean; headerVisible: boolean }>`
    width: calc(100% - 15px);
    height: var(--header-height);
    box-shadow: ${({ headerVisible }) => (headerVisible ? 'var(--very-mild-shadow)' : 'none')};
    background: ${({ headerVisible }) => (headerVisible ? 'var(--theme)' : 'transparent')};
    z-index: 12;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    padding: 0 15px;
    transition: 0.1s background;
    color: var(--text);
    display: ${({ hidden = false }) => (hidden ? 'none' : 'flex')};

    & button {
        transform: translateX(${({ headerVisible }) => (headerVisible ? '-35px' : '0')});
    }

    @media (max-width: 1000px) {
        padding: 0 15px;
        width: 100%;
        justify-content: flex-start;
        & button {
            transform: none;
        }
    }
`

export const HeaderTitle = styled.div<{
    headerVisible: boolean
    noButton: boolean | undefined
}>`
    max-width: 700px;
    width: 100%;
    font-size: ${({ headerVisible }) => (headerVisible ? '1.1rem' : '1.4rem')};
    font-weight: 600;
    transition: 0.2s transform, 0.2s font-size;
    position: absolute;
    white-space: ${({ headerVisible }) => (headerVisible ? 'nowrap' : 'normal')};
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;

    @media (min-width: 1001px) {
        transform: ${({ headerVisible }) => `translate(${headerVisible ? '0, 0' : '19px, 75px'})`};
    }

    @media (max-width: 1000px) {
        transform: ${({ headerVisible, noButton }) =>
            `translate(${headerVisible ? (noButton ? '0, 0' : '25px, 0') : '0px, 50px'})`};
        width: ${({ headerVisible }) => (headerVisible ? '180px' : 'calc(100% - 30px)')};
    }
`

export default HeaderWrapper
