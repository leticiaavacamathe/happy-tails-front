import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  handleOnSubmit: () => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit();
    setUserData(userData);
  };

  const isCompleated = userData.username !== "" && userData.password !== "";

  return (
    <LoginFormStyled onSubmit={handleOnClick}>
      <div className="loginform-control">
        <label className="loginform-control__label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="loginform-control__input"
          id="username"
          onChange={onChangeInputs}
          value={userData.username}
        />
      </div>
      <div className="loginform-control">
        <label className="loginform-control__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="loginform-control__input"
          id="password"
          onChange={onChangeInputs}
          value={userData.password}
        />
      </div>
      <button
        type="submit"
        className="loginform-button"
        disabled={!isCompleated}
        onClick={handleOnSubmit}
      >
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
