import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HeaderProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

export const Header: FC<HeaderProps> = () => {
   return (
      <header>
         <Link className="site-logo" to="/">
            #VanLife
         </Link>
         <nav>
            <NavLink
               style={({ isActive }) => (isActive ? activeStyleLink : undefined)}
               to="host"
            >
               Host
            </NavLink>
            <NavLink
               style={({ isActive }) => (isActive ? activeStyleLink : undefined)}
               to="about"
            >
               About
            </NavLink>
            <NavLink
               style={({ isActive }) => (isActive ? activeStyleLink : undefined)}
               to="vans"
            >
               Vans
            </NavLink>
         </nav>
      </header>
   );
};
