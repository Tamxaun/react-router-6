import React from 'react';
import {
   Await,
   defer,
   Link,
   NavLink,
   Outlet,
   useLoaderData,
   useOutletContext,
} from 'react-router-dom';

import { getHostVanDetail } from '../../../api';
import { VansType } from '../../../miragejs';
import { HostVansDetailProps } from '.';

const activeStyleLink = {
   fontWeight: 'bold',
   textDecoration: 'underline',
   color: '#161616',
};

type ContextType = { loadedVanDetails: VansType | null };

export async function hostVanDetaileLoader(id: string) {
   return defer({ vanDetaislData: getHostVanDetail(id) });
}

export const HostVansDetail: React.FC<HostVansDetailProps> = () => {
   const dataPromise = useLoaderData();
   const { vanDetaislData } = dataPromise as { vanDetaislData: VansType };

   function renderVansElenensts(loadedVanDetails: VansType) {
      return (
         <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
               <img
                  src={loadedVanDetails?.imageUrl}
                  alt={`View of ${loadedVanDetails?.name}`}
               />
               <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${loadedVanDetails.type}`}>
                     {loadedVanDetails?.type}
                  </i>
                  <h3>{loadedVanDetails?.name}</h3>
                  <h4>${loadedVanDetails?.price}/day</h4>
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
            <Outlet context={{ loadedVanDetails } satisfies ContextType} />
         </div>
      );
   }

   return (
      <section>
         <Link to="./.." className="back-button">
            &larr; <span>Back to all vans</span>
         </Link>
         <React.Suspense fallback={<h2>Loading vans...</h2>}>
            <Await
               resolve={vanDetaislData}
               errorElement={<p>Error loading package location!</p>}
            >
               {renderVansElenensts}
            </Await>
         </React.Suspense>
      </section>
   );
};

export function useVan() {
   return useOutletContext<ContextType>();
}
