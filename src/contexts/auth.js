import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
    const [store, setStore] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkisSigned = async () => {
        try {
            const current = localStorage.getItem('@Carpede:store');
            if (current) setStore(await JSON.parse(current));
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
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
        setStore();
        localStorage.clear();
    };

    useEffect(() => {
        checkisSigned();
    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!store, loading, store, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
