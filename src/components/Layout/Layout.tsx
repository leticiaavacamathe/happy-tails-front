import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <ContainerStyled>
        {pathname !== "/login" && <Header />}
        <Loader />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
