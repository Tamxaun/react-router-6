import React from 'react';
import { useParams } from 'react-router-dom';

import type { VansType } from '../../miragejs/index';
import { VanDetailProps } from '.';

export const VanDetail: React.FC<VanDetailProps> = () => {
   const params = useParams();
   const [vanData, setVanData] = React.useState<Partial<VansType> | null>(null);

   React.useEffect(() => {
      fetch(`http://localhost:5173/api/vans/${params.id}`)
         .then((result) => result.json())
         .then((data) => setVanData(data.vans));
   }, [params]);

   return (
      <div className="van-detail-container">
         {vanData ? (
            <div className="van-detail">
               <img src={vanData?.imageUrl} alt={`View of ${vanData?.name}`} />
               <i className={`van-type ${vanData?.type} selected`}>{vanData?.type}</i>
               <h2>{vanData?.name}</h2>
               <p className="van-price">
                  <span>${vanData?.price}</span>/day
               </p>
               <p>{vanData?.description}</p>
               <button className="link-button">Rent this van</button>
            </div>
         ) : (
            <h2>Loading...</h2>
         )}
      </div>
   );
};
