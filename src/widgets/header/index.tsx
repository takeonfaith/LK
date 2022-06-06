import { Button } from '@ui/button'
import List from '@ui/list'
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useHistory } from 'react-router'

const Header = () => {
    const history = useHistory()
    return (
        <List direction="horizontal" width="100%" padding="10px 40px">
            <Button icon={<FaChevronLeft />} onClick={() => history.goBack()} background="transparent" />
            <Button icon={<FaChevronRight />} onClick={() => history.goForward()} background="transparent" />
        </List>
    )
}

export default React.memo(Header)
