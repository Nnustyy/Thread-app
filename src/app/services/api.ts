import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../constants";
import type { RootState } from "../../store/store";


const baseQuery = fetchBaseQuery({
  baseUrl:`${BASE_URL}/api`,
  prepareHeaders:(headers, {getState}) => {
    const token = (getState() as RootState).auth.token || localStorage.getItem('token');
    if(token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers;
  }
})

export const api = createApi({
  reducerPath:'splitApi',
  baseQuery,
  endpoints: () => ({})
})


