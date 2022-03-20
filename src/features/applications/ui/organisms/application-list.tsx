import { Application } from '@api/model'
import { SkeletonShape } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { ApplicationHeader, ApplicationItem } from '../molecules'

const ApplicationListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: var(--brLight);
    overflow: hidden;
    /* gap: 10px; */

    & > * + * {
        position: relative;
        /* &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: var(--search);
        } */
    }
`

interface Props {
    loading: boolean
    list: Application[] | null
}

const ApplicationList = ({ loading, list }: Props) => {
    return (
        <ApplicationListWrapper>
            <ApplicationHeader />
            <div className="list">
                {!loading
                    ? list?.map((application, index) => {
                          return <ApplicationItem {...application} index={index} key={application.regNumber} />
                      })
                    : Array(4)
                          .fill(0)
                          .map((_, i) => (
                              <SkeletonShape
                                  key={i}
                                  shape="rect"
                                  size={{
                                      width: '100%',
                                      height: '35px',
                                  }}
                                  margin="15px 0"
                              />
                          ))}
            </div>
        </ApplicationListWrapper>
    )
}

export default ApplicationList
