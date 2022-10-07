import { CHILDREN_ROUTE, VAX_ROUTE } from '@app/routes/teachers-routes'
import { userModel } from '@entities/user'
import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'
import ContactInfoActualizationPage from '@pages/contact-info-actualization'
import DataVerificationPage from '@pages/data-verification'
import ElectronicInteractionAgreementPage from '@pages/electronic-interaction-agreement'
import PageIsNotReady from '@pages/page-is-not-ready'
import React from 'react'
import styled from 'styled-components'
import { SliderPage } from 'widgets'

const UserInfoWrapper = styled.div`
    font-size: 0.9em;
    width: 100%;
`

const UserInfo = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    const teacherPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} /> },
        // {
        //     title: 'Сведения о вакцинации',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={VAX_ROUTE} />
        //         </div>
        //     ),
        // },
        // {
        //     title: 'Дети и внуки',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={CHILDREN_ROUTE} />
        //         </div>
        //     ),
        // },
        { title: 'Анкета для сверки данных', content: <DataVerificationPage /> },
        { title: 'Актуализация контактных данных', content: <ContactInfoActualizationPage /> },
        {
            title: 'Соглашение об электронном взаимодействии',
            content: <ElectronicInteractionAgreementPage />,
        },
    ]

    const studentPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} /> },
        { title: 'Приказы', content: <Orders orders={user.orders} /> },
        {
            title: 'Актуализация контактных данных',
            content: (
                <div style={{ justifyContent: 'start' }}>
                    <PageIsNotReady oldVersionUrl={''} />
                </div>
            ),
        },
        { title: 'Соглашение об электронном взаимодействии', content: <ElectronicInteractionAgreementPage /> },
    ]

    return (
        <UserInfoWrapper>
            <SliderPage
                appearance={false}
                align="left"
                width="100%"
                maxWidth="100%"
                sliderWidth={user.user_status === 'stud' ? '50%' : '80%'}
                pages={user.user_status === 'stud' ? studentPages : teacherPages}
            />
        </UserInfoWrapper>
    )
}

export default UserInfo
