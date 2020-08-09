/* eslint-disable react/display-name */
import React, { useContext, useEffect } from 'react';
import AuthContext from './contexts/auth';

export function AuthRoute(Component) {
  return () => {
    const { checkisSigned } = useContext(AuthContext);

    useEffect(() => {
      checkisSigned();
    }, []);

    return <Component {...arguments} />;
  };
}
