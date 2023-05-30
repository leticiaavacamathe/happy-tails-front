import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
