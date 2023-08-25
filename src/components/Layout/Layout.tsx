import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../index';
import { LayoutProps } from '.';

export const Layout: FC<LayoutProps> = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};
