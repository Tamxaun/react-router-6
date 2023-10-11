import { FC } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { HostLayoutProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

export const HostLayout: FC<HostLayoutProps> = () => {
   const navigate = useNavigate();
   function fakeLogOut() {
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
   }

   return (
      <>
         <nav className="host-nav">
            <NavLink
               to="."
               end
               style={({ isActive }) => {
                  return isActive ? activeStyleLink : undefined;
               }}
            >
               Dashboard
            </NavLink>
            <NavLink
               to="income"
               style={({ isActive }) => {
                  return isActive ? activeStyleLink : undefined;
               }}
            >
               Income
            </NavLink>
            <NavLink
               to="vans"
               style={({ isActive }) => {
                  return isActive ? activeStyleLink : undefined;
               }}
            >
               Vans
            </NavLink>
            <NavLink
               to="reviews"
               style={({ isActive }) => {
                  return isActive ? activeStyleLink : undefined;
               }}
            >
               Reviews
            </NavLink>
            <button onClick={fakeLogOut}>Log Out</button>
         </nav>
         <Outlet />
      </>
   );
};
