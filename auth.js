/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from './contexts/auth';

export function AuthRoute(Component) {
    return () => {
        const { signed } = useContext(AuthContext);
        const router = useRouter();

        useEffect(() => {
            if (!signed) router.push('/');
        }, [signed]);

        return <Component {...arguments} />;
    };
}
