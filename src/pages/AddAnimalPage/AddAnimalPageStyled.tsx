import styled from "styled-components";

const AddAnimalPageStyled = styled.main`
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.fontMainColor};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
export default AddAnimalPageStyled;
