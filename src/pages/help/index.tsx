import { HelpCard } from '@features/help/ui'
import Accordion from '@ui/accordion/accordion'
import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import React from 'react'

const HelpPage = () => {
    return (
        <CenterPage alignItems="flex-start" padding="10px">
            <Block height="fit-content" orientation="vertical" gap="10px" width="650px">
                <Title size={2} align="left">
                    Помощь
                </Title>
                <LocalSearch
                    placeholder="Поиск того, с чем нужна помощь"
                    whereToSearch={undefined}
                    searchEngine={() => null}
                    setResult={() => null}
                />
                <Accordion title={'Как создать заявку'} height={500}>
                    <List direction="horizontal" gap={0} height="100%" showPages>
                        <HelpCard />
                        <HelpCard />
                    </List>
                </Accordion>
                <Accordion title={'Как создать заявку'} height={500}>
                    <List direction="horizontal" gap={0} height="100%" showPages>
                        <HelpCard />
                        <HelpCard />
                    </List>
                </Accordion>
                <Accordion title={'Как создать заявку'} height={500}>
                    <List direction="horizontal" gap={0} height="100%" showPages>
                        <HelpCard />
                        <HelpCard />
                    </List>
                </Accordion>
            </Block>
        </CenterPage>
    )
}

export default HelpPage
