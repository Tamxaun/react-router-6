import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

import { type ErrorType } from '../../api';
import { ErrorProps } from '.';

export const Error: FC<ErrorProps> = () => {
   const error = useRouteError();
   console.log('error', error);
   const errorData = error as ErrorType;

   return (
      <div className="error-page-content">
         <h1>Error: {errorData?.message}</h1>
         <pre>
            {errorData?.status} — {errorData?.statusText}
         </pre>
      </div>
   );
};
