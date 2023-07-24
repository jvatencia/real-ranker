import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../utils/Breakpoints";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // if (pathname !== "/homepage") {
    //   window.location.replace("https://thetestguytutors.com/login/");
    // }
  }, [location]);

  return (
    <Host>
      <Header>MY HEADER</Header>

      {/* ROUTE CONTENT */}
      <Main>
        <Outlet />
      </Main>

      {/* <Footer>© Copyright 2023 </Footer> */}
    </Host>
  );
};

export default Layout;

const Host = styled.div`
  min-height: 100vh;
  min-width: 100%;
  background-color: #f4f4f4;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 40px 0;

  @media ${devices.mobileL} {
    padding: 15px 10px;
  }
`;

const Header = styled.header`
  height: 60px;
  background-color: #ffffff;
  box-shadow: inset 0px -2px 0px #f0f0f0;
  text-align: center;
  padding: 1rem;
`;

const Footer = styled.footer`
  height: 54px;
  background-color: #ffffff;
  box-shadow: inset 0px 2px 0px #f0f0f0;
  text-align: center;
  padding: 1rem;
`;
