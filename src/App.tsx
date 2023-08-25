import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard, HostLayout, Income, Layout, Reviews } from './components/index';
import { About, Home, Van, Vans } from './pages/index';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="vans">
                  <Route index element={<Vans />} />
                  <Route path=":id" element={<Van />} />
               </Route>
               <Route path="host" element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
