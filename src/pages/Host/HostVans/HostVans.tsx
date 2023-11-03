import React from 'react';
import { Await, defer, Link, useLoaderData } from 'react-router-dom';

import { getHostVans } from '../../../api';
import { VansType } from '../../../miragejs/index';
import { HostVansProps } from '.';

export async function hostVansLoader() {
   return defer({ vansData: getHostVans() });
}

export const HostVans: React.FC<HostVansProps> = () => {
   const dataPromise = useLoaderData();
   const { vansData } = dataPromise as { vansData: VansType[] };

   function renderVansElenensts(loadedVans: VansType[]) {
      const displayedVanElements = loadedVans?.map((van) => (
         <Link to={van?.id || ''} key={van?.id} className="host-van-link-wrapper">
            <div className="host-van-single" key={van?.id}>
               <img src={van?.imageUrl} alt={`View of ${van?.name}`} />
               <div className="host-van-info">
                  <h3>{van?.name}</h3>
                  <p>${van?.price}/day</p>
               </div>
            </div>
         </Link>
      ));
      return (
         <div className="host-vans-list">
            <section>{displayedVanElements}</section>
         </div>
      );
   }

   return (
      <section>
         <h1 className="host-vans-title">Your listed vans</h1>
         <React.Suspense fallback={<h2>Loading vans...</h2>}>
            <Await
               resolve={vansData}
               errorElement={<p>Error loading package location!</p>}
            >
               {renderVansElenensts}
            </Await>
         </React.Suspense>
      </section>
   );
};
