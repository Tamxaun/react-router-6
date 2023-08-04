import React from 'react';
import { Link } from 'react-router-dom';

import type { VansType } from '../../miragejs/index';
import { VansProps } from '.';

export const Vans: React.FC<VansProps> = () => {
   const [vansData, setVansData] = React.useState<Partial<VansType[]> | null>(null);

   React.useEffect(() => {
      fetch('http://localhost:5173/api/vans')
         .then((result) => result.json())
         .then((data) => setVansData(data.vans));
   }, []);

   const vanElements = vansData?.map((van) => (
      <div key={van?.id} className="van-tile">
         <Link to={`${van?.id}`}>
            <img src={van?.imageUrl} alt={van?.name} />
            <div className="van-info">
               <h3>{van?.name}</h3>
               <p>
                  ${van?.price}
                  <span>/day</span>
               </p>
            </div>
            <i className={`van-type ${van?.type} selected`}>{van?.type}</i>
         </Link>
      </div>
   ));

   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         {vansData ? <div className="van-list">{vanElements}</div> : <h2>Loading...</h2>}
      </div>
   );
};
