import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanPhotosProps } from '.';

export const HostVanPhotos: FC<HostVanPhotosProps> = () => {
   const { vanDetailData } = useVan();
   return (
      <img
         src={vanDetailData?.imageUrl}
         alt={`View of ${vanDetailData?.name}`}
         className="host-van-detail-image"
      />
   );
};
