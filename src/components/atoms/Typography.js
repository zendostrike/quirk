import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.primary};
`

const H2 = styled(props => <H1 {...props} />)`
  font-size: 25px;
  font-weight: 600;
`

const H3 = styled(props => <H1 {...props} />)`
  font-size: 18px;
`

const H4 = styled(props => <H1 {...props} />)`
  font-size: 15px;
`

const H5 = styled(props => <H1 {...props} />)`
  font-size: 13px;
  font-weight: 500;
`

const Paragraph = styled.p`
  font-size: 13px;
`

export default { H1, H2, H3, H4, H5, Paragraph }
