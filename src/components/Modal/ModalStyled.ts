import styled from "styled-components";

const ModalStyled = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.fontMainColor};

  .modal {
    display: flex;
    position: relative;
    align-items: end;
    width: 290px;
    height: 160px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &--correct {
      border: 5px solid ${(props) => props.theme.colors.correct};
    }

    &--error {
      border: 5px solid ${(props) => props.theme.colors.error};
    }

    &__button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
      padding: 12px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 290px;
      height: 90px;

      &__title {
        font-size: ${(props) => props.theme.fontSizes.medium};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        padding-left: 10px;
      }

      &__text {
        font-size: ${(props) => props.theme.fontSizes.small};
        padding-left: 10px;
      }
    }
  }
`;

export default ModalStyled;
