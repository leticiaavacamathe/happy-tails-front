import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <div className="loader-spinner" aria-label="loader-spinner"></div>
    </LoaderStyled>
  );
};

export default Loader;
