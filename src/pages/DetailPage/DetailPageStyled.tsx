import styled from "styled-components";

const DetailPageStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .detail {
    &__img {
      object-fit: cover;
      padding: 15px 0px;
      border-radius: 8px 8px 30px 8px;
    }

    &__info {
      padding: 0px 15px;
      border-radius: 18px 18px 0px 0px;
      color: ${(props) => props.theme.colors.fontMainColor};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.small};

      &__name {
        padding: 15px 0px;
        letter-spacing: 0.01em;
        font-size: 22px;
        font-weight: ${(props) => props.theme.fontWeights.bold};
      }

      &__city {
        padding: 15px 0px;

        &__icon {
          margin-right: 2px;
        }
      }
    }

    &__info__container {
      padding: 15px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__text {
        padding: 15px 0px;
      }

      &__card {
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 70px;
        height: 70px;
        border: 1px solid #f5f5f5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 7.5px;
      }

      h3 {
        font-weight: ${(props) => props.theme.fontWeights.bold};
      }
    }
  }
`;
export default DetailPageStyled;
