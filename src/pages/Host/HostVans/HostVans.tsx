import React from 'react';
import { Link } from 'react-router-dom';

import { VansType } from '../../../miragejs/index';
import { HostVansProps } from '.';

export const HostVans: React.FC<HostVansProps> = () => {
   const [vansData, setVansData] = React.useState<Partial<VansType[]> | null>(null);

   React.useEffect(() => {
      fetch('http://localhost:5173/api/host/vans')
         .then((result) => result.json())
         .then((data) => setVansData(data.vans));
   }, []);

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
         <div className="host-vans-list">
            {vansData ? <section>{hostVansEls}</section> : <h2>Loading...</h2>}
         </div>
      </section>
   );
};
