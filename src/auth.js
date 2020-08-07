/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from './contexts/auth';

export function AuthRoute(Component) {
    return () => {
        const { signed, loading } = useContext(AuthContext);
        console.log(signed, '<--');
        const router = useRouter();

        useEffect(() => {
            if (!signed && !loading) router.push('/account/signin');
        }, [signed]);

        return <Component {...arguments} />;
    };
}
