import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/index';
import { About, Home, Van, Vans } from './pages/index';

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/vans" element={<Vans />} />
               <Route path="/vans/:id" element={<Van />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
