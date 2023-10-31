import React from 'react';
import {
   ActionFunctionArgs,
   Form,
   redirect,
   useActionData,
   useLocation,
   useNavigation,
} from 'react-router-dom';

import { loginUser } from '../../api';
import { LoginProps } from '.';

export async function action({ request }: ActionFunctionArgs) {
   const formData = await request.formData();
   const email = formData.get('email') as string;
   const password = formData.get('password') as string;

   try {
      await loginUser({ email, password });

      const url = new URL(request.url);
      const from = url.searchParams.get('from') || '/host';

      localStorage.setItem('isLoggedIn', 'true');

      const response = redirect(from);
      // @ts-expect-error // It's silly, but it works (more about: https://github.com/scrimba/learn-react-router-6#april-21-2023)
      response.body = true;
      return response;
   } catch (error) {
      console.error('An error occurred:', error);
      return error;
   }
}

export const Login: React.FC<LoginProps> = () => {
   const error = useActionData() as TypeError;
   const navigation = useNavigation();
   const location = useLocation();

   const status = navigation.state === 'submitting' ? 'submitting' : 'indle';

   return (
      <div className="login-container">
         <h1>Sign in to your account</h1>
         {location.state?.message && (
            <h3 className="login-error">{location.state.message}</h3>
         )}
         {error && <h3 className="login-error">{error.message}</h3>}
         <Form className="login-form" method="post" replace>
            <input name="email" type="email" placeholder="Email address" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit" disabled={status === 'submitting'}>
               {status === 'submitting' ? 'Submitting...' : 'Log in'}
            </button>
         </Form>
      </div>
   );
};
