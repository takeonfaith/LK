import Block from '@ui/block'
import { Title } from '@ui/title'
import styled from 'styled-components'
import AppStoreIcon from '@shared/images/app-store.svg'
import GooglePlayIcon from '@shared/images/google-play.svg'

const CustomLink = styled.a`
    display: block;
    font-size: 18px;
    line-height: 22px;
`

const WrapperAppLink = styled.div`
    display: flex;
    justify-content: space-between;
`

const GooglePlay = styled.img`
    width: 140px;
`

const AppStore = styled.img`
    width: 130px;
`

const MobileAppLink = () => (
    <Block maxWidth={'330px'} orientation="vertical" gap="10px" height="fit-content" alignItems={'left'}>
        <Title size={3} align="left" bottomGap>
            Мобильное приложение Московского Политеха
        </Title>
        <CustomLink href="https://e.mospolytech.ru/old/storage/files/MP_mobile_app_instruction.pdf" target="_blank">
            Инструкция по применению
        </CustomLink>
        <WrapperAppLink>
            <a href="https://play.google.com/store/apps/details?id=ru.mospolytech.mobilecampus&hl=en_US&gl=U">
                <GooglePlay src={GooglePlayIcon} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ru.mospolytech.mobilecampus&hl=en_US&gl=US">
                <AppStore src={AppStoreIcon} />
            </a>
        </WrapperAppLink>
    </Block>
)

export default MobileAppLink
