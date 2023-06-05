import styled from "styled-components";

const ButtonStyled = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  margin: 16px 10px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 0px 3.7px 16.9px rgba(21, 44, 79, 0.05);
  border-radius: 7.5px;
`;

export default ButtonStyled;
