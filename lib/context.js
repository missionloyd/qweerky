import { createContext } from 'react';

export const UserContext = createContext({ 
  user: null, 
  username: null,
  isLoggedIn: false,
  userId: null,
  token: null,
  loading: true,
  login: () => {},
  logout: () => {}
});