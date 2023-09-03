// all file contents stolen from https://github.com/pjcjonas/clerk-dev-global-state-with-context/blob/main/src/App.tsx

import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { UserContext } from "../../app-context/userContext";
import { useNavigate } from "react-router-dom";

interface SingInSignOutProps {
  signedIn: boolean;
  signOut: () => Promise<void>;
  setUserObject: () => Promise<void>;
}

export const SignInSignOut: React.FunctionComponent<SingInSignOutProps> = (
  props: SingInSignOutProps
): JSX.Element => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {user ? (
          <Button variant="contained" onClick={() => props.signOut()}>
            Sign Out {user.username}
          </Button>
        ) : (
          <span>
            {/* @ts-ignore */}
          <Button variant="contained" onClick={() => {props.setUserObject() && navigate('/homepage');}}>
            Sign in
          </Button>
          <small>This is a fake sign in. All it does is set the user object back to the one defined in the <em>./src/app-context/user-context.tsx</em></small></span>
        )}
      </Typography>
    </React.Fragment>
  );;
};