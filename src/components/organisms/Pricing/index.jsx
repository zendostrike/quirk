import React from 'react'
import styled from 'styled-components'

import { Typography } from '@components'

const Container = styled.section`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`

const Pricing = () => (
  <Container>
    <Typography.H1>
      <b>We give you the best plan for your project</b>
    </Typography.H1>
  </Container>
)

export default Pricing
