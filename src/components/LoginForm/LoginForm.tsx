import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentials } from "../../store/user/types";

interface LoginFormProps {
  handleOnSubmit: (userCredentials: UserCredentials) => void;
}

const LoginForm = ({ handleOnSubmit }: LoginFormProps): React.ReactElement => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleOnSubmit(userCredentials);
    setUserCredentials(userCredentials);
  };

  const isCompleated =
    userCredentials.username !== "" && userCredentials.password !== "";

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
          value={userCredentials.username}
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
          value={userCredentials.password}
        />
      </div>
      <button className="loginform-button" disabled={!isCompleated}>
        Log in
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
