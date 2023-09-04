import { FC } from 'react';

import { useVan } from '../../pages/Host/HostVansDetail/HostVansDetail';
import { HostVanPhotosProps } from '.';

export const HostVanPhotos: FC<HostVanPhotosProps> = () => {
   const { currentVan } = useVan();
   return (
      <img
         src={currentVan?.imageUrl}
         alt={`View of ${currentVan?.name}`}
         className="host-van-detail-image"
      />
   );
};
