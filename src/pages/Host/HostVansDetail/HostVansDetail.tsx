import React from 'react';
import { Link, NavLink, Outlet, useLoaderData, useOutletContext } from 'react-router-dom';

import { getHostVanDetail } from '../../../api';
import { VansType } from '../../../miragejs';
import { HostVansDetailProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

type ContextType = { vanDetailData: VansType | null };

export async function hostVanDetaileLoader(id: string) {
   const data = await getHostVanDetail(id);
   return data;
}

export const HostVansDetail: React.FC<HostVansDetailProps> = () => {
   const vanDetailData = useLoaderData() as VansType;

   return (
      <section>
         <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
         </Link>
         {
            <div className="host-van-detail-layout-container">
               <div className="host-van-detail">
                  <img
                     src={vanDetailData?.imageUrl}
                     alt={`View of ${vanDetailData?.name}`}
                  />
                  <div className="host-van-detail-info-text">
                     <i className={`van-type van-type-${vanDetailData.type}`}>
                        {vanDetailData?.type}
                     </i>
                     <h3>{vanDetailData?.name}</h3>
                     <h4>${vanDetailData?.price}/day</h4>
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
               <Outlet context={{ vanDetailData } satisfies ContextType} />
            </div>
         }
      </section>
   );
};

export function useVan() {
   return useOutletContext<ContextType>();
}
