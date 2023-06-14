import styled from "styled-components";

const AddAnimalFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  padding-top: 25px;

  .add-form-control {
    display: flex;
    flex-direction: column;

    &__input {
      padding: 10px;
      width: 304px;
      height: 42px;
      left: 8px;
      top: 244px;
      border-radius: 7px;
      background-color: ${(props) => props.theme.colors.backgroundPrimary};
      color: ${(props) => props.theme.colors.fontMainColor};
      font-size: ${(props) => props.theme.fontSizes.small};
    }

    &__label {
      padding: 10px;
    }

    &__description {
      padding: 10px;
      width: 304px;
      height: 100px;
      border-radius: 7px;
      font-family: ${(props) => props.theme.fonts.primary};
      background-color: ${(props) => props.theme.colors.backgroundPrimary};
      color: ${(props) => props.theme.colors.fontMainColor};
      font-size: ${(props) => props.theme.fontSizes.small};
      border: none;
    }

    &__type {
      padding: 5px;
      width: 150px;
      height: 42px;
      border-radius: 7px;
      background-color: ${(props) => props.theme.colors.backgroundPrimary};
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.fontMainColor};
      border: none;
    }
  }

  .add-form-button {
    width: 100%;
    display: flex;
    justify-content: center;

    &__button {
      margin-top: 30px;
      margin-bottom: 15px;
      width: 265px;
      height: 50px;
      background-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      color: white;
      font-size: ${(props) => props.theme.fontSizes.small};
      letter-spacing: 0.03em;
      font-weight: ${(props) => props.theme.fontWeights.medium};

      :disabled {
        opacity: 0.5;
      }
    }
  }
`;
export default AddAnimalFormStyled;
