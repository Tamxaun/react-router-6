import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

import { getVanDetail } from '../../api';
import type { VansType } from '../../miragejs/index';
import { VanDetailProps } from '.';

export async function vanDetaileLoader(id: string) {
   const data: VansType = await getVanDetail(id);
   return data;
}

export const VanDetail: React.FC<VanDetailProps> = () => {
   const vanDetailData = useLoaderData() as VansType;
   const { state } = useLocation();

   return (
      <div className="van-detail-container">
         <Link to={`../${state?.search}`} relative="path" className="back-button">
            &larr; <span>Back to {state?.type || 'all'} vans</span>
         </Link>
         {
            <div className="van-detail">
               <img
                  src={vanDetailData?.imageUrl}
                  alt={`View of ${vanDetailData?.name}`}
               />
               <i className={`van-type ${vanDetailData?.type} selected`}>
                  {vanDetailData?.type}
               </i>
               <h2>{vanDetailData?.name}</h2>
               <p className="van-price">
                  <span>${vanDetailData?.price}</span>/day
               </p>
               <p>{vanDetailData?.description}</p>
               <button className="link-button">Rent this van</button>
            </div>
         }
      </div>
   );
};
