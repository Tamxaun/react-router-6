import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthRequiredProps } from '.';

export const AuthRequired: React.FC<AuthRequiredProps> = () => {
   const location = useLocation();

   const isLoggedIn = localStorage.getItem('isLoggedIn');

   if (!isLoggedIn) {
      return (
         <Navigate
            to="/login"
            state={{ from: location.pathname, message: 'You must log in first' }}
            replace={true}
         />
      );
   }

   return <Outlet />;
};
