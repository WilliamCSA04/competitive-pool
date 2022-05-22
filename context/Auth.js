import Router from 'next/router';
import { createContext } from 'react';
import { useEffect } from 'react';
import { supabase } from '../utils';

const AuthContext = createContext({ user: undefined });

export function AuthProvider({ children }) {
  const user = supabase.auth.user();
  useEffect(() => {
    if (!user) {
      Router.push('/login');
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
