export type ErrorType = {
   message: string;
   statusText: string;
   status: string;
} | null;

export async function getVans() {
   const res = await fetch('/api/vans');
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
export async function getVanDetail(id: string) {
   const res = await fetch(`/api/vans/${id}`);
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

export async function getHostVans() {
   const res = await fetch('/api/host/vans');
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
