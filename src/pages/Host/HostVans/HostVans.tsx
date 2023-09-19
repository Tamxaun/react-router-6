import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { getHostVans } from '../../../api';
import { VansType } from '../../../miragejs/index';
import { HostVansProps } from '.';

export async function hostVansLoader() {
   const data: VansType[] = await getHostVans();
   return data;
}

export const HostVans: React.FC<HostVansProps> = () => {
   const vansData = useLoaderData() as VansType[];

   const hostVansEls = vansData?.map((van) => (
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
      <section>
         <h1 className="host-vans-title">Your listed vans</h1>
         <div className="host-vans-list">{hostVansEls}</div>
      </section>
   );
};
