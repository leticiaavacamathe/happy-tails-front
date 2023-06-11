import styled from "styled-components";

const AddAnimalPageStyled = styled.main`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.fontMainColor};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  h1 {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
export default AddAnimalPageStyled;
