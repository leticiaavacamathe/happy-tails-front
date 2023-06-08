import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  color: ${(props) => props.theme.colors.fontMainColor};
  gap: 20px;

  .not-found {
    &__number {
      font-size: 70px;
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }

    &__title {
      font-size: ${(props) => props.theme.fontSizes.medium};
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
  }
`;

export default NotFoundPageStyled;
