import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const MenuItem = styled.div`
  padding: 10px;
`;

const Header = () => (
  <div>
    <NavBar>
      <LeftSection>
        <MenuItem>Quirk.com</MenuItem>
        <MenuItem>Top Players</MenuItem>
        <MenuItem>Top Teams</MenuItem>
      </LeftSection>
      <RightSection>
        <MenuItem>Login</MenuItem>
        <MenuItem>Registro</MenuItem>
      </RightSection>
    </NavBar>
  </div>
);

export default Header;
