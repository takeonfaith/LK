import React from 'react'
import { HeaderWrapper, UserInfo } from './ui'

const Header = () => {
    // const history = useHistory()

    return (
        <HeaderWrapper>
            <div className="header-button-and-title">
                {/*{width <= 1000 && <MenuButton />}*/}
                <h3>title</h3>
            </div>
            <UserInfo />
        </HeaderWrapper>
    )

    // return (
    //     <List direction="horizontal" width="100%" padding="5px 40px">
    //         <Button icon={<FaChevronLeft />} onClick={() => history.goBack()} background="transparent" />
    //         <Button icon={<FaChevronRight />} onClick={() => history.goForward()} background="transparent" />
    //     </List>
    // )
}

export default React.memo(Header)
