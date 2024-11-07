import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "./storege";

export const createBaseQuery = () => {
  console.log(loadState("user"));
  
  return fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${loadState("user")?.accessToken}`,
    },
    
  });
};
