import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const checkisSigned = async () => {
    setLoading(true);
    try {
      const current = localStorage.getItem('@Carpede:store');
      if (current) {
        setStore(await JSON.parse(current));
        router.push('/app');
      } else {
        router.push('/account/signin');
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const signIn = (currentStore) => {
    setLoading(true);
    const { avatar, name, whatsapp, email, token, store_id } = currentStore;
    setStore({
      avatar,
      name,
      whatsapp,
      email,
      token,
      store_id
    });
    try {
      localStorage.setItem('@Carpede:store', JSON.stringify(currentStore));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const signOut = () => {
    setLoading(true);
    setStore(null);
    localStorage.clear();
    router.push('/account/signin');
    setLoading(false);
  };

  useEffect(() => {
    checkisSigned();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!store, loading, store, signIn, signOut, checkisSigned }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
