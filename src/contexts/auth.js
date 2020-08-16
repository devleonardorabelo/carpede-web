import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const checkisSigned = async () => {
    try {
      const current = localStorage.getItem('@Carpede:store');
      if (!current) return router.push('/account/signin');
      setStore(await JSON.parse(current));
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = (currentStore) => {
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
  };

  const signOut = () => {
    setStore(null);
    localStorage.clear();
    router.push('/account/signin');
  };

  useEffect(() => {
    checkisSigned();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!store, store, signIn, signOut, checkisSigned }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
