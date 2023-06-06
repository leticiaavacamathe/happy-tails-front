import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.652);
  z-index: 1;

  .custom-loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #7f7094);
    mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: s3 1s infinite linear;
  }
  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default LoaderStyled;
