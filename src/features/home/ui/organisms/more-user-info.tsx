import React, { memo } from 'react'
import SliderPage from '../../../slider/organisms/slider-page'
import { MoreInfoContent } from '../atoms/more-info'
import AllInfo from '../molecules/all-info'
import Orders from '../molecules/orders'
import { User } from '@api/model'

export default memo(MoreUserInfo)

interface Props {
    user: User
}

function MoreUserInfo({ user }: Props) {
    return (
        <MoreInfoContent>
            <SliderPage
                pages={[
                    { title: 'Учетная карточка', content: <AllInfo user={user} /> },
                    { title: 'Приказы', content: <Orders orders={user.orders} /> },
                ]}
            />
        </MoreInfoContent>
    )
}
