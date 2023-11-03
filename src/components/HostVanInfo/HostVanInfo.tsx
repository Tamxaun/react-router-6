import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanInfoProps } from '.';

export const HostVanInfo: FC<HostVanInfoProps> = () => {
   const { loadedVanDetails } = useVan();
   return (
      <section className="host-van-detail-info">
         <h4>
            Name: <span>{loadedVanDetails?.name}</span>
         </h4>
         <h4>
            Category: <span>{loadedVanDetails?.type}</span>
         </h4>
         <h4>
            Description: <span>{loadedVanDetails?.description}</span>
         </h4>
         <h4>
            Visibility: <span>Public</span>
         </h4>
      </section>
   );
};
