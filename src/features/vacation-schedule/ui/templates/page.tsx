import { vacationScheduleModel } from '@entities/vacation-schedule'
import { CenterPage, Wrapper, Title, Message, Divider } from '@ui/atoms'
import Block from '@ui/block'
import Subtext from '@ui/subtext'
import React from 'react'
import { Vacation } from '../organism'

const Page = () => {
    const { data, error } = vacationScheduleModel.selectors.useVacationShedule()

    return (
        <Wrapper load={vacationScheduleModel.effects.getVacationScheduleFx} error={error} data={data}>
            <CenterPage alignItems="flex-start">
                <Block orientation="vertical" height="fit-content" gap="1rem">
                    <Title size={2} align="left">
                        График отпусков
                    </Title>
                    <Subtext width="100%">Производственный календарь на 2022 год</Subtext>
                    <Title size={3} align="left">
                        Сведения о трудоустройстве
                    </Title>
                    {data?.map((vacation, index) => {
                        if (index + 1 < data.length) {
                            return (
                                <>
                                    <Vacation key={index} {...vacation} />
                                    <Divider margin="30px 0" />
                                </>
                            )
                        }
                        return <Vacation key={index} {...vacation} />
                    })}
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

// getCorrectWordForm
export default Page
