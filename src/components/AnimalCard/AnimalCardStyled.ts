import styled from "styled-components";

const AnimalCardStyled = styled.article`
  display: flex;
  justify-content: center;
  position: relative;

  .animal-card {
    width: 290px;
    height: 283.52px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &__title {
      margin-bottom: 2px;
      color: ${(props) => props.theme.colors.fontMainColor};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    &__city {
      color: ${(props) => props.theme.colors.fontMainColor};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.small};
    }

    &__image {
      border-radius: 8px 8px 30px 8px;
      object-fit: cover;
    }

    &__info {
      padding: 5px 10px;
    }

    &__icon {
      margin-right: 2px;
    }
  }
`;
export default AnimalCardStyled;
