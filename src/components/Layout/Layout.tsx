import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../index';
import { LayoutProps } from '.';

export const Layout: FC<LayoutProps> = () => {
   return (
      <div className="site-wrapper">
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};
