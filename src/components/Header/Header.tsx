import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HeaderProps } from '.';

export const Header: FC<HeaderProps> = () => {
   return (
      <header>
         <Link className="site-logo" to="/">
            #VanLife
         </Link>
         <nav>
            <NavLink
               className={({ isActive }) => (isActive ? 'active-link' : undefined)}
               to="/host"
            >
               Host
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? 'active-link' : undefined)}
               to="/about"
            >
               About
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? 'active-link' : undefined)}
               to="/vans"
            >
               Vans
            </NavLink>
         </nav>
      </header>
   );
};
