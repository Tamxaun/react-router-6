import { FC } from 'react';
import { Link, NavLink, useLocation, useNavigation } from 'react-router-dom';

import avatarImage from '../../assets/images/avatar-icon.png';
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
   const location = useLocation();
   const isLoggedIn = localStorage.getItem('isLoggedIn');

   const isNormalLoad = navigation.state === 'loading' && navigation.formData == null;

   return (
      <header>
         <div className="site-logo">
            <Link to="/">#VanLife </Link>
            <code style={stateText}>({isNormalLoad ? 'Loading' : 'Ready'})</code>
         </div>
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
            <Link
               to={isLoggedIn ? '/host' : 'login'}
               className="login-link"
               state={{ from: location }}
            >
               <img className="login-icon" src={avatarImage} alt={'Avatar icon'} />
            </Link>
         </nav>
      </header>
   );
};
