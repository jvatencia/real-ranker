// FILE - ./src/app-context/user-context-provider.tsx
// ----------------------------------

import React, { useState } from "react";
import { AppState, UserContext, defaultState } from "./userContext";

interface Props {
  children: React.ReactNode;
}

/**
 * The main context provider 
 */
export const UserContextProvider: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  
  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState(defaultState);

  /**
   * Declare the update state method that will handle the state values
   */
  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState });
  };

  /**
   * Context wrapper that will provider the state values to all its children nodes
   */
  return (
    <UserContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </UserContext.Provider>
  );
};