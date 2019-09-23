import React from 'react'
import styled from 'styled-components'

import { Typography, TextList } from '@components'

const Container = styled.section`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`

const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`

const MenuItem = styled.div`
  padding: 10px;
`

const advantagesList = [
  'Developers ready to begin to code.',
  'Pro designers will make your app astonishing',
  'Scrum? Agile? We already have that.',
  'Lift off in.'
]

const Advantages = () => (
  <Container>
    <LeftSection />
    <RightSection>
      <MenuItem>
        <Typography.H1>The advantages of work with us</Typography.H1>
        <Typography.Paragraph>
          Don't waste time and money building a team, we already have it. Invest
          your time in the mos important thing: <b>Your product.</b>
        </Typography.Paragraph>
        <TextList list={advantagesList} />
      </MenuItem>
    </RightSection>
  </Container>
)

export default Advantages
