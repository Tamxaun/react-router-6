import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { HostLayoutProps } from '.';

export const HostLayout: FC<HostLayoutProps> = () => {
   return (
      <>
         <nav className="host-nav">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income/">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
         </nav>
         <Outlet />
      </>
   );
};
