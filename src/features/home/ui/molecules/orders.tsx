import React, { memo } from 'react'

export default memo(Orders)

interface Props {
    orders: string[]
}

function Orders({ orders }: Props) {
    return (
        <div>
            {orders.map((order) => (
                <p key={order}>{order}</p>
            ))}
        </div>
    )
}
