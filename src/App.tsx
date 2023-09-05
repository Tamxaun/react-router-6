import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
   HostLayout,
   HostVanInfo,
   HostVanPhotos,
   HostVanPricing,
   Layout,
} from './components/index';
import {
   About,
   Dashboard,
   Home,
   HostVans,
   HostVansDetail,
   Income,
   NotFound,
   Reviews,
   VanDetail,
   Vans,
} from './pages/index';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="vans" element={<Vans />} />
               <Route path="vans/:id" element={<VanDetail />} />
               <Route path="host" element={<HostLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="vans" element={<HostVans />} />
                  <Route path="vans/:id" element={<HostVansDetail />}>
                     <Route index element={<HostVanInfo />} />
                     <Route path="pricing" element={<HostVanPricing />} />
                     <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
                  <Route path="reviews" element={<Reviews />} />
               </Route>
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
