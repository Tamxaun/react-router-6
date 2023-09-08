import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { type Error, getVans } from '../../api';
import type { VansType } from '../../miragejs/index';
import { VansProps } from '.';

export const Vans: React.FC<VansProps> = () => {
   const [vansData, setVansData] = React.useState<Partial<VansType[]> | null>(null);
   const [searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState<Error>(null);

   const typeFilter = searchParams.get('type');

   React.useEffect(() => {
      async function loadVans() {
         try {
            setLoading(true);
            const data: VansType[] = await getVans();
            setVansData(data);
         } catch (err: unknown) {
            console.log('err', err);
            setError(err as Error);
         } finally {
            setLoading(false);
            console.log(vansData);
         }
      }

      loadVans();
   }, []);

   const displayedVanElements = typeFilter
      ? vansData?.filter((van) => van?.type?.toLowerCase() === typeFilter)
      : vansData;

   const vanElements = displayedVanElements?.map((van) => (
      <div key={van?.id} className="van-tile">
         <Link
            to={van?.id || ''}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
         >
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

   if (loading) {
      return <h1>Loading...</h1>;
   }
   if (error) {
      return <h1>There was an error: {error.message}</h1>;
   }

   return (
      <div className="van-list-container">
         <h1>Explore our van options</h1>
         <div className="van-list-filter-buttons">
            <button
               onClick={() => setSearchParams({ type: 'simple' })}
               className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
            >
               Simple
            </button>
            <button
               onClick={() => setSearchParams({ type: 'luxury' })}
               className={`van-type simple ${typeFilter === 'luxury' ? 'selected' : ''}`}
            >
               Luxury
            </button>
            <button
               onClick={() => setSearchParams({ type: 'rugged' })}
               className={`van-type simple ${typeFilter === 'rugged' ? 'selected' : ''}`}
            >
               Rugged
            </button>
            {typeFilter ? (
               <button
                  onClick={() => setSearchParams()}
                  className={`van-type clear-filters `}
               >
                  Clear filters
               </button>
            ) : null}
         </div>
         <div className="van-list">{vanElements}</div>
      </div>
   );
};
