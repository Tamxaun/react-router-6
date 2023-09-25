import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';

import {
   AuthRequired,
   Error,
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
   hostVanDetaileLoader,
   HostVans,
   HostVansDetail,
   hostVansLoader,
   Income,
   Login,
   NotFound,
   Reviews,
   VanDetail,
   vanDetaileLoader,
   Vans,
   vansLoader,
} from './pages';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="vans" element={<Vans />} loader={vansLoader} />
         <Route
            path="vans/:id"
            element={<VanDetail />}
            loader={({ params }) => vanDetaileLoader(params.id as string)}
         />
         <Route path="login" element={<Login />} />
         <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
               <Route index element={<Dashboard />} />
               <Route path="income" element={<Income />} />
               <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
               <Route
                  path="vans/:id"
                  element={<HostVansDetail />}
                  loader={({ params }) => hostVanDetaileLoader(params.id as string)}
               >
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
               </Route>
               <Route path="reviews" element={<Reviews />} />
            </Route>
         </Route>
         <Route path="*" element={<NotFound />} />
      </Route>,
   ),
);

export default function App() {
   return <RouterProvider router={router} />;
}
