import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { loginUser } from '../../api';
import { LoginProps } from '.';

type ErrorType = {
   message: string;
   statusText: string;
   status: string;
} | null;

export const Login: React.FC<LoginProps> = () => {
   const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });
   const [status, setStatus] = React.useState<string>('indle');
   const [error, setError] = React.useState<ErrorType>(null);

   const navigate = useNavigate();
   const location = useLocation();

   const from: string = location.state?.from || '/host';

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      setStatus('submitting');
      setError(null);

      try {
         await loginUser(loginFormData);
         localStorage.setItem('isLoggedIn', 'true');
         navigate(from, {
            state: { authenticated: true, message: 'You have successfully logged in' },
            replace: true,
         });
      } catch (err) {
         setError(err as ErrorType);
      }

      setStatus('indle');
   }

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
      setLoginFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   }

   return (
      <div className="login-container">
         {location.state?.message && (
            <h3 className="login-error">{location.state.message}</h3>
         )}
         <h1>Sign in to your account</h1>
         {error && <h3 className="login-error">{error.message}</h3>}
         <form onSubmit={handleSubmit} className="login-form">
            <input
               name="email"
               onChange={handleChange}
               type="email"
               placeholder="Email address"
               value={loginFormData.email}
            />
            <input
               name="password"
               onChange={handleChange}
               type="password"
               placeholder="Password"
               value={loginFormData.password}
            />
            <button type="submit" disabled={status === 'submitting'}>
               {status === 'submitting' ? 'Submitting...' : 'Log in'}
            </button>
         </form>
      </div>
   );
};
