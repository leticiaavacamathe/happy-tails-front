import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  height: 25rem;
  padding-top: 25px;

  .form-control {
    display: flex;
    flex-direction: column;
  }

  .form-control__input {
    padding: 5px;
    width: 304px;
    height: 42.35px;
    left: 8px;
    top: 244px;
    border-radius: 7.52905px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
  }

  .form-control__label {
    padding: 10px;
  }

  .form-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15.0581px 23.5283px;
    gap: 9.41px;
    margin-top: 30px;
    width: 265px;
    height: 56px;
    left: 27.5px;
    top: 450px;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7.52905px;
    color: white;
    font-size: ${(props) => props.theme.fontSizes.medium};
    letter-spacing: 0.03em;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;
export default LoginFormStyled;
