import styled from "styled-components";

const AnimalsListPageStyled = styled.main`
  padding: 15px;
  height: 100vh;
  width: 100%;
  display: flex;

  .list-page-title {
    color: ${(props) => props.theme.colors.fontMainColor};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export default AnimalsListPageStyled;
