import React from 'react'
import styled from 'styled-components'

import { Typography } from '@components'

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

const Hero = () => (
  <Container>
    <LeftSection>
      <MenuItem>
        <Typography.H1>Quirk.com</Typography.H1>
        <Typography.H4>Hellou</Typography.H4>
      </MenuItem>
    </LeftSection>
    <RightSection />
  </Container>
)

export default Hero
