import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
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

const Header = () => (
  <>
    <NavBar>
      <LeftSection>
        <MenuItem>@team</MenuItem>
      </LeftSection>
      <RightSection>
        <MenuItem>@w</MenuItem>
      </RightSection>
    </NavBar>
  </>
)

export default Header
