import { userModel } from '@entities/user'
import { vacationScheduleModel } from '@entities/vacation-schedule'
import Select, { SelectPage } from '@features/select'
import { CenterPage, Divider, LinkButton, Title, Wrapper } from '@ui/atoms'
import Block from '@ui/block'
import Card from '@ui/card'
import List from '@ui/list'
import Subtext from '@ui/subtext'
import React, { useEffect, useMemo, useState } from 'react'
import { Vacation } from '../organism'
import OldVacation from '../organism/old-vacation'

const Page = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { data, error } = vacationScheduleModel.selectors.useVacationShedule()

    const items: SelectPage[] = useMemo(
        () => data?.map((value, index) => ({ id: index, title: value.subdivision })) || [],
        [data],
    )

    const [selected, setSelected] = useState<SelectPage | null>(items[0] ?? {})

    useEffect(() => {
        if (!selected?.id) {
            setSelected(items[0])
        }
    }, [selected?.id, setSelected, items])

    const selectedVacation = data?.[Number(selected?.id || 0)]

    return (
        <Wrapper load={vacationScheduleModel.effects.getVacationScheduleFx} error={error} data={data}>
            <CenterPage alignItems="flex-start">
                <Block orientation="vertical" height="fit-content" gap="1rem">
                    <Title size={2} align="left">
                        График отпусков
                    </Title>
                    <Subtext width="100%">Производственный календарь на 2022 год</Subtext>
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
                    {!!user?.id && (
                        <Select width="fit-content" items={items} selected={selected} setSelected={setSelected} />
                    )}
                    {selectedVacation && <Vacation {...selectedVacation} />}
                    <Divider />
                    {selectedVacation?.oldVacations && (
                        <OldVacation
                            oldVacations={selectedVacation.oldVacations}
                            oldAllVacationRest={selectedVacation?.oldAllVacationRest}
                        />
                    )}
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default Page
