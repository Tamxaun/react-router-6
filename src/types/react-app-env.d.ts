declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare type ErrorType = {
   message: string;
   statusText: string;
   status: string;
} | null;
