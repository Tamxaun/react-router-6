import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthRequiredProps } from '.';

export const AuthRequired: React.FC<AuthRequiredProps> = () => {
   const authenticated = false;

   if (!authenticated) {
      return <Navigate to="/login" replace={true} />;
   }

   return <Outlet />;
};
