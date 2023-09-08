export type Error = {
   message: string;
   statusText: string;
   status: string;
} | null;

export async function getVans() {
   const res = await fetch('api/vans');
   console.log('res', res);
   if (!res.ok) {
      throw {
         message: 'Failed to fetch vans',
         statusText: res.statusText,
         status: res.status,
      };
   }

   const data = await res.json();
   return data.vans;
}
