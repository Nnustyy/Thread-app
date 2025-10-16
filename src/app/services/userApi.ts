import type { User } from "../../types/type";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{token:string}, {email:string, password:string}> ({
      query: (userData) => ({
        url:'/login',
        method:'POST',
        body:userData
      })
    }),

    register: builder.mutation<{email:string, password:string, name:string}, {email:string, password:string, name:string}> ({
      query:(userData) => ({
        url:'/register',
        method:'POST',
        body:userData
      })
    }),

    getUserById: builder.query<User, string> ({
      query:(userId) => ({
        url:`/users/${userId}`,
        method:'GET'
      })
    }),

    current: builder.query<User, void> ({
      query: () => ({
        url:'/current',
        method:'GET',
      })
    }),

    updateUser: builder.mutation<User,{userData: FormData, id:string}> ({
      query: ({userData, id}) => ({
        method: 'PUT',
        url:`/users/${id}`,
        body:userData
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  useGetUserByIdQuery,
  useLazyCurrentQuery,
  useLazyGetUserByIdQuery
} = userApi