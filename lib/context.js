import { createContext } from 'react';

export const UserContext = createContext({ 
  username: null,
  isLoggedIn: false,
  uid: null,
  loading: true,
  login: () => {},
  logout: () => {}
});