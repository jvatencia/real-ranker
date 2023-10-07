// FILE - ./src/app-context/user-context.tsx
// ----------------------------------
// stolen from: https://clerk.com/blog/understanding-and-properly-using-react-global-state?utm_source=www.google.com&utm_medium=referral&utm_campaign=none

import React from "react";

export interface UserContract {
  id?: number,
  username?: string,
  firstName?: string,
  email?: string
}

// The dummy user object used for this example
export const DummyUser:UserContract ={
  id: 1,
  username: "MyUserName",
  firstName: "Roman",
  email: "john@doe.com"
}

/**
 * Application state interface (ADD STUFF HERE FOR IT TO BE GLOBAL)
 */
export interface AppState {
  user?: UserContract;
  colleges?: Array<object>;
  token?: string;
  form?: object;
  updateState: (newState: Partial<AppState>) => void;
}

/**
 * Default application state
 */
const defaultState: AppState = {
  user: {},
  colleges: [],
  token: '',
  updateState: (newState?: Partial<AppState>) => {},
};

/**
 * Creating the Application state context for the provider
 */
export const UserContext = React.createContext<AppState>(defaultState);