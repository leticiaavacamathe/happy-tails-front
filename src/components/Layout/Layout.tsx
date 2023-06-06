import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const { pathname } = useLocation();

  return (
    <>
      {isLoading && <Loader />}
      <ContainerStyled>
        {pathname !== "/login" && <Header />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
