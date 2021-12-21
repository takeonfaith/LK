import React, { memo } from 'react'

interface Props {
    orders: string[]
}

const Orders = ({ orders }: Props) => {
    return (
        <div>
            {orders?.map((order) => (
                <p key={order}>{order}</p>
            ))}
        </div>
    )
}

interface Props {
    orders: string[]
}

export default memo(Orders)
