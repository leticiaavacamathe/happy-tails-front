import NavBar from "../NavBar/NavBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/happy-tails.svg"
        alt="happy tails logo"
        width={67}
        height={66}
      />
      <NavBar />
    </HeaderStyled>
  );
};

export default Header;
