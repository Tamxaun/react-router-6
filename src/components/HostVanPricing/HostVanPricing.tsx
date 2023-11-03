import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanPricingProps } from '.';

export const HostVanPricing: FC<HostVanPricingProps> = () => {
   const { loadedVanDetails } = useVan();

   return (
      <h3 className="host-van-price">
         ${loadedVanDetails?.price}
         <span>/day</span>
      </h3>
   );
};
