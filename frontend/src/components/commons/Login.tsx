import { useState } from "react";
import styled from "styled-components";
import { BootstrapInput } from "../utilities/BootstrapInput"
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { BASE_URL } from "../../utils/constants";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { devices } from "../../utils/breakpoints";
import { useNavigate } from "react-router-dom";
async function loginUser(credentials: any) {
  console.log(JSON.stringify(credentials));
  return fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json; charset=utf8'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

interface ILogin {
  setToken: any,
  redirectTo: string
}

export default function Login({ setToken, redirectTo }: ILogin) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const token = await loginUser({
      email,
      password
    });
    if (token.success) {
      console.log("got token: ");
      console.log(token);
      setToken(token);
      navigate(redirectTo);
    }
    else {
      console.log('failed!'
      );
    }
  }

  return (
    <Main>

      <Box
        component="form"
        sx={{
          width: 500,
          display: 'grid',
          gridTemplateColumns: { sm: '1fr' },
          backgroundColor: '#FFFAF5'
        }}>

        <FormControl variant="standard"
          // error={emailError} 
          sx={{ width: '100%' }}
        >
          <Grid container spacing={2} sx={{ textAlign: 'center' }} justifyContent="center" alignItems="center" >
            <FormGroup>

              <Grid item xs={12}>
                <InputLabel shrink htmlFor="email">
                  Email
                </InputLabel>
                <BootstrapInput value={email} id="email"
                  // @ts-ignore
                  onChange={e => setEmail(e.target.value)}
                // onBlur={validateEmail}
                />
              </Grid>
            </FormGroup>
            <FormGroup>

              <Grid item xs={12}>
                <InputLabel shrink htmlFor="password">
                  Password
                </InputLabel>
                <BootstrapInput value={password} id="password"
                  type="password"
                  // @ts-ignore
                  onChange={e => setPassword(e.target.value)}
                // onBlur={validateEmail}
                />
              </Grid>
            </FormGroup>
          </Grid>
          <Grid item xs={5}>
            <Button sx={{ width: '100%' }} onClick={handleSubmit} >Login</Button>
          </Grid>
        </FormControl>
      </Box>
    </Main>
  )
}
const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 40px 0;

  @media ${devices.mobileL} {
    padding: 15px 10px;
  }
`;