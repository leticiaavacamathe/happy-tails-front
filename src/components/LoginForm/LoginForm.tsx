import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled action="">
      <div className="form-control">
        <label className="form-control__label" htmlFor="username">
          Username:
        </label>
        <input className="form-control__input" type="text" id="username" />
      </div>
      <div className="form-control">
        <label className="form-control__label" htmlFor="password">
          Password:
        </label>
        <input className="form-control__input" type="password" id="password" />
      </div>
      <button className="form-button" type="submit">
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
