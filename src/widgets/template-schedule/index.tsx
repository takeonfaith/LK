/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISchedule } from '@api/model'
import { userModel } from '@entities/user'
import SearchWithHints from '@features/search-with-hints'
import { getGroups } from '@shared/api/student-api'
import Masks from '@shared/lib/masks'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { Button, Divider, Wrapper } from '@ui/atoms'
import React, { useState } from 'react'
import { FiSidebar, FiUsers } from 'react-icons/fi'
import { Slider } from 'widgets'
import useTemplateSchedule from './hooks/use-template-schedule'
import { useDisableTrackpadZoom } from '@shared/lib/hooks/use-disable-trackpad-zoom'
import { SideMenu } from './ui/side-menu'

// const SchedulePageContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 30px;

//     .slider-wrapper {
//         width: 100%;
//         max-width: 650px;
//     }

//     .buttons-and-search {
//         display: flex;
//         align-items: center;
//         column-gap: 10px;
//     }

//     @media (max-width: 1000px) {
//         row-gap: 15px;
//     }
// `

interface Props {
    teacherName?: string
    group?: string
    data: ISchedule
    loading: boolean
    error: string | null
}

const TemplateSchedule = ({ teacherName, group, data, loading, error }: Props) => {
    const { schedule, currentModule, teachers } = data
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [groupSearch, setGroupSearch] = useState(user?.group ?? '')
    const {
        pages,
        showGroupSearch,
        handleCurrentPage,
        onValueEmpty,
        handleLoad,
        onHintClick,
        isListView,
        handleListView,
    } = useTemplateSchedule(data, teacherName, group)
    // eslint-disable-next-line no-console
    console.log(teachers)

    const currentPage = Object.keys(schedule ?? {}).findIndex((el) => el === currentModule)

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={schedule}>
            <PageBlock
                topRightCornerElement={
                    <Flex w="fit-content" gap="8px">
                        {/* <Button
                            icon={<FiList />}
                            isChosen={isListView}
                            onClick={handleListView}
                            textColor={isListView ? '#fff' : 'var(--text)'}
                            height="37px"
                            width="38px"
                        /> */}
                        {showGroupSearch && (
                            <Flex gap="8px">
                                {/* <Button icon={<FiSidebar />} width="36px" height="36px" /> */}
                                <SearchWithHints
                                    value={groupSearch}
                                    setValue={setGroupSearch}
                                    onHintClick={onHintClick}
                                    placeholder={'Группа'}
                                    customMask={Masks.groupMask}
                                    request={getGroups}
                                    leftIcon={<FiUsers />}
                                    onValueEmpty={user?.user_status === 'staff' ? onValueEmpty : undefined}
                                />
                            </Flex>
                        )}
                    </Flex>
                }
            >
                <Flex d="column" gap="8px">
                    <Slider
                        appearance={false}
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={handleCurrentPage}
                    />
                    {pages[currentPage ?? 0]?.content}
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

export default TemplateSchedule
