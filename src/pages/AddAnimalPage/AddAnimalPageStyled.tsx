import styled from "styled-components";

const AddAnimalPageStyled = styled.main`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.fontMainColor};

  h1 {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  p {
    font-weight: ${(props) => props.theme.fontWeights.medium};
    padding: 10px;
    text-align: center;
  }
`;
export default AddAnimalPageStyled;
