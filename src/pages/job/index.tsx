import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import SkeletonLoading from '@features/schedule/ui/atoms/skeleton-loading'
import React from 'react'

const JobPage = () => {
    return (
        <div>
            <SkeletonLoading />
            <ScheduleAndNotification />
        </div>
    )
}

export default JobPage
