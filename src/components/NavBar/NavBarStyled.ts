import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 9px;
  }

  li {
    height: 48px;
  }
`;

export default NavBarStyled;
