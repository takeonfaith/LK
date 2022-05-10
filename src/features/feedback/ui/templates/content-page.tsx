import React from 'react'
import styled from 'styled-components'
import { AskForm, HelpLinks, OtherContacts } from '../organisms'

const Page = styled.div`
    align-items: center;
    gap: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export function ContentPage() {
    return (
        <Page>
            <HelpLinks />
            <OtherContacts />
            <AskForm />
        </Page>
    )
}
