import { initializeApp } from 'firebase/app';
import {
   collection,
   doc,
   getDoc,
   getDocs,
   getFirestore,
   query,
   where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
   apiKey: 'AIzaSyDyvhTBgRFQvPvSX1_b0vzA8jvEQVSkCQE',
   authDomain: 'react-router-6-vanlife.firebaseapp.com',
   projectId: 'react-router-6-vanlife',
   storageBucket: 'react-router-6-vanlife.appspot.com',
   messagingSenderId: '570270966210',
   appId: '1:570270966210:web:b6e89a1df37e49c42f365b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getVans() {
   const querySnapshot = await getDocs(vansCollectionRef);
   const vans = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
   }));

   return vans;
}
export async function getVanDetail(id: string) {
   const docRef = doc(db, 'vans', id);
   const docSnapshot = await getDoc(docRef);

   return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
   };
}

export async function getHostVans() {
   const q = query(vansCollectionRef, where('hostId', '==', '123'));
   const querySnapshot = await getDocs(q);
   const vans = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
   }));

   return vans;
}
export async function getHostVanDetail(id: string) {
   const docRef = doc(db, 'vans', id);
   const docSnapshot = await getDoc(docRef);

   return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
   };
}
export type ErrorType = {
   message: string;
   statusText: string;
   status: string;
} | null;

// mirage data
// export async function getVans() {
//    const res = await fetch('/api/vans');
//    if (!res.ok) {
//       throw {
//          message: 'Failed to fetch vans',
//          statusText: res.statusText,
//          status: res.status,
//       };
//    }

//    const data = await res.json();
//    return data.vans;
// }
// export async function getVanDetail(id: string) {
//    const res = await fetch(`/api/vans/${id}`);
//    if (!res.ok) {
//       throw {
//          message: 'Failed to fetch vans',
//          statusText: res.statusText,
//          status: res.status,
//       };
//    }

//    const data = await res.json();
//    return data.vans;
// }

// export async function getHostVans() {
//    const res = await fetch('/api/host/vans');
//    if (!res.ok) {
//       throw {
//          message: 'Failed to fetch vans',
//          statusText: res.statusText,
//          status: res.status,
//       };
//    }

//    const data = await res.json();
//    return data.vans;
// }

// export async function getHostVanDetail(id: string) {
//    const res = await fetch(`/api/host/vans/${id}`);
//    if (!res.ok) {
//       throw {
//          message: 'Failed to fetch vans',
//          statusText: res.statusText,
//          status: res.status,
//       };
//    }

//    const data = await res.json();
//    return data.vans;
// }

export async function loginUser(creds: { email: string; password: string }) {
   const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) });
   const data = await res.json();

   if (!res.ok) {
      throw {
         message: data.message,
         statusText: res.statusText,
         status: res.status,
      };
   }

   return data;
}
