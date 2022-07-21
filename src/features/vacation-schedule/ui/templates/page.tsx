import { vacationScheduleModel } from '@entities/vacation-schedule'
import { CenterPage, Divider, LinkButton, Title, Wrapper } from '@ui/atoms'
import Block from '@ui/block'
import Card from '@ui/card'
import List from '@ui/list'
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
                    <Subtext width="100%" maxWidth="100%">
                        Производственный календарь на 2022 год
                    </Subtext>
                    <List scroll={false} direction="horizontal" gap={12} wrapOnMobile>
                        <Card
                            title="Для пятидневной рабочей недели"
                            height="120px"
                            width="50%"
                            background="5"
                            padding="20px 40px 20px 20px"
                        >
                            <LinkButton
                                onClick={() => null}
                                href={
                                    'https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2022_god_(pyatidnevka).pdf'
                                }
                                textColor="var(--reallyBlue)"
                                text="Подробнее"
                                background="transparent"
                                padding="10px 0"
                            />
                        </Card>
                        <Card
                            title="Для шестидневной рабочей недели"
                            height="120px"
                            width="50%"
                            background="6"
                            padding="20px 40px 20px 20px"
                        >
                            <LinkButton
                                onClick={() => null}
                                href={
                                    'https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_na_2022_god_(shestidnevka).pdf'
                                }
                                textColor="var(--reallyBlue)"
                                text="Подробнее"
                                background="transparent"
                                padding="10px 0"
                            />
                        </Card>
                    </List>
                    <Divider />
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
