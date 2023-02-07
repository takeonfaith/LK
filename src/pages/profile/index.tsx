import React, { useState } from 'react'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { UserInfo } from '@features/profile'
import { Error } from '@ui/error'
import Top from './ui/top'
import { Wrapper } from '@shared/ui/atoms'
import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'

// const GradientCircle = styled.div<{ current: boolean }>`
//     width: 20px;
//     height: 20px;
//     border-radius: 100px;
//     border: ${({ current }) => current && '2px solid var(--theme)'};
//     outline: ${({ current }) => current && '2px solid var(--reallyBlue)'};
//     background-image: radial-gradient(farthest-side at top left, ${Colors.blue.main}, transparent 100%),
//         radial-gradient(farthest-side at top center, ${Colors.purple.main}, transparent 100%),
//         radial-gradient(farthest-side at top right, ${Colors.orange.main}, transparent 100%),
//         radial-gradient(farthest-side at top right, ${Colors.purple.main}, transparent 100%),
//         radial-gradient(farthest-corner at top right, ${Colors.red.main}, transparent 100%);
// `

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()
    const [currentPage, setCurrentPage] = useState(0)

    if (!user || !allRoutes) return null

    if (!!error) return <Error text={error} />

    const studentPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} /> },
        { title: 'Приказы', content: <Orders orders={user.orders} /> },
    ]

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
    ]

    const pages = user.user_status === 'stud' ? studentPages : teacherPages

    return (
        <Wrapper load={function () {}} loading={false} data={[]} error={null}>
            <Top user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
            {/* <List direction="horizontal" innerPadding="0px 0vw 10px 0vw" showPages>
                <StoryCard title="Обучение" content={TutorialStory} />
            </List> */}
            {/* <AvailableAccounts /> */}
            <UserInfo currentPage={currentPage} pages={pages.map((p) => p.content)} />
        </Wrapper>
    )
}

export default ProfilePage
