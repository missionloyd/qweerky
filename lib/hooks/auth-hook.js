import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
  const [username, setUsername] = useState(null);
  const [uid, setUid] = useState(false);

  const login = useCallback((username, uid) => {
    setUid(uid);
    setUsername(username);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        username: username,
        uid: uid,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setUid(null);
    setUsername(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData
    ) {
      login(storedData.username, storedData.uid);
    }
  }, [login]);

  return { login, logout, uid, username };
};