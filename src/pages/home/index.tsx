import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import ShortCutLinks from '@features/home/ui/organisms/short-cut-links'
import UserInfo from '@features/home/ui/organisms/user-info'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import { Content } from './ui/atoms/content'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { data } = scheduleModel.selectors.useSchedule()
    console.log(data)

    return (
        <Wrapper
            loading={!user}
            load={() => scheduleModel.effects.getScheduleFx(user)}
            error={error}
            data={user?.user_status === 'stud' ? user && data.schedule : user}
        >
            <Content>
                {!!user && (
                    <div className="home-page-content-inner">
                        <UserInfo user={user} />
                        {!user.subdivisions && <ScheduleAndNotification />}
                        <ShortCutLinks />
                    </div>
                )}
            </Content>
        </Wrapper>
    )
}

export default Home
