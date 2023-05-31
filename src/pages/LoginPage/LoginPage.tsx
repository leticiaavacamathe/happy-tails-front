import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactElement => {
  return (
    <>
      <img
        className="logo-big"
        src="images/happy-tails-icon-letters.png"
        alt="happy tails logo"
        width={150}
        height={161}
      />
      <LoginForm />
    </>
  );
};

export default LoginPage;
