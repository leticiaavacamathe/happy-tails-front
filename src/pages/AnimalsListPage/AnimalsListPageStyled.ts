import styled from "styled-components";

const AnimalsListPageStyled = styled.main`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .list-page-title {
    color: ${(props) => props.theme.colors.fontMainColor};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.medium};
    padding: 15px;
  }
`;

export default AnimalsListPageStyled;
