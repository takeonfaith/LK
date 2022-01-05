import { Wrapper } from '@ui/atoms'
import React from 'react'

const AllTeachersPage = () => {
    return (
        <Wrapper
            load={function (): void {
                throw new Error('Function not implemented.')
            }}
            loading={false}
            error={null}
            data={undefined}
        ></Wrapper>
    )
}

export default AllTeachersPage
