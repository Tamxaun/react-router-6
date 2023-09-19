import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanInfoProps } from '.';

export const HostVanInfo: FC<HostVanInfoProps> = () => {
   const { vanDetailData } = useVan();
   return (
      <section className="host-van-detail-info">
         <h4>
            Name: <span>{vanDetailData?.name}</span>
         </h4>
         <h4>
            Category: <span>{vanDetailData?.type}</span>
         </h4>
         <h4>
            Description: <span>{vanDetailData?.description}</span>
         </h4>
         <h4>
            Visibility: <span>Public</span>
         </h4>
      </section>
   );
};
