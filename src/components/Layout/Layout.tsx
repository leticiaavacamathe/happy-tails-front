import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Header from "../Header/Header";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const isOn = useAppSelector((state) => state.ui.modal.isOn);

  const { pathname } = useLocation();

  return (
    <>
      {isLoading && <Loader />}
      {isOn && <Modal />}
      <ContainerStyled>
        {pathname !== "/login" && <Header />}
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
