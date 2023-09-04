import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

import { VansType } from '../../../miragejs';
import { HostVansDetailProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

export const HostVansDetail: React.FC<HostVansDetailProps> = () => {
   const params = useParams();
   const [vanData, setVanData] = React.useState<Partial<VansType> | null>(null);

   React.useEffect(() => {
      fetch(`http://localhost:5173/api/host/vans/${params.id}`)
         .then((result) => result.json())
         .then((data) => setVanData(data.vans));
   }, [params]);

   return (
      <section>
         <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
         </Link>
         {vanData ? (
            <div className="host-van-detail-layout-container">
               <div className="host-van-detail">
                  <img src={vanData?.imageUrl} alt={`View of ${vanData?.name}`} />
                  <div className="host-van-detail-info-text">
                     <i className={`van-type van-type-${vanData.type}`}>
                        {vanData?.type}
                     </i>
                     <h3>{vanData?.name}</h3>
                     <h4>${vanData?.price}/day</h4>
                  </div>
               </div>
               <nav className="host-van-detail-nav">
                  <NavLink
                     to="."
                     end
                     style={({ isActive }) => {
                        return isActive ? activeStyleLink : undefined;
                     }}
                  >
                     Details
                  </NavLink>
                  <NavLink
                     to="pricing"
                     style={({ isActive }) => {
                        return isActive ? activeStyleLink : undefined;
                     }}
                  >
                     Pricing
                  </NavLink>
                  <NavLink
                     to="photos"
                     style={({ isActive }) => {
                        return isActive ? activeStyleLink : undefined;
                     }}
                  >
                     Photos
                  </NavLink>
               </nav>
               <Outlet />
            </div>
         ) : (
            <h2>Loading...</h2>
         )}
      </section>
   );
};
