import { FC } from 'react';
import { Link, NavLink, useNavigation } from 'react-router-dom';

import { HeaderProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

const stateText = {
   fontWeight: 'normal',
   fontSize: '14px',
   color: '#161616',
   opacity: '0.5',
};

export const Header: FC<HeaderProps> = () => {
   const navigation = useNavigation();
   const isNormalLoad = navigation.state === 'loading' && navigation.formData == null;
   return (
      <header>
         <Link className="site-logo" to="/">
            #VanLife <code style={stateText}>({isNormalLoad ? 'Loading' : 'Ready'})</code>
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
