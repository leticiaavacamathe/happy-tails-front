import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <span className="not-found__number">404</span>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        The page you are looking is not available
      </p>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
