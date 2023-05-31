import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <ContainerStyled>
        {pathname !== "/login" && <Header />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
