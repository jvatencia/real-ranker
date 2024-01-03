import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import thetestguy from "../../assets/thetestguy.png";
import { devices } from "../../utils/breakpoints";

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
      <Header>
        <Box
          component="img"
          sx={{
            // height: 233,
            // width: 350,
            width: 133,
            height: 39,
            float: 'left',
            marginLeft: '10%'
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          src={thetestguy}
        />
        <Typography gutterBottom sx={{
          fontFamily: 'Poppins',
          color: '#222224',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          float: 'right',
          marginRight: '10%'
        }}>
          Real Ranker
        </Typography>
      </Header>

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
  background-color: #FFFAF5;
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
