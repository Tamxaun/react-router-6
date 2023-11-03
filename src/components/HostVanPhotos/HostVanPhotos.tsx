import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanPhotosProps } from '.';

export const HostVanPhotos: FC<HostVanPhotosProps> = () => {
   const { loadedVanDetails } = useVan();
   return (
      <img
         src={loadedVanDetails?.imageUrl}
         alt={`View of ${loadedVanDetails?.name}`}
         className="host-van-detail-image"
      />
   );
};
