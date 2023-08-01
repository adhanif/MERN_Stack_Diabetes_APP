import React from 'react';
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getProfile } from '../utils/axiosFunctions';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const get = async () => {
      const u = await getProfile();
      setUser(u);
      setIsLoading(false);
    };
    get();
  }, []);

  const login = (userData) => {
    // console.log('In the Authprovider');
    // console.log(userData);
    setUser(userData);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(false);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
