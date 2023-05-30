import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  width: 100%;
  height: 4.7rem;
  display: flex;
  align-items: center;

  .header-logo {
    padding: 3px;
  }
`;

export default HeaderStyled;
