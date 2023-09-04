import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanInfoProps } from '.';

export const HostVanInfo: FC<HostVanInfoProps> = () => {
   const { currentVan } = useVan();
   return (
      <section className="host-van-detail-info">
         <h4>
            Name: <span>{currentVan?.name}</span>
         </h4>
         <h4>
            Category: <span>{currentVan?.type}</span>
         </h4>
         <h4>
            Description: <span>{currentVan?.description}</span>
         </h4>
         <h4>
            Visibility: <span>Public</span>
         </h4>
      </section>
   );
};
