import { api } from "./api";

export const followApi = api.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation<void, {followingId:string}>({
      query: (id) => ({
        url:'/follow',
        method:'POST',
        body:id
      })
    }),

    unfollowUser: builder.mutation<void, {id:string}>({
      query: (id) => ({
        url:`/follow/${id}`,
        method:'DELETE',
        body:id
      })
    })
  })
})

export const {
  useFollowUserMutation,
  useUnfollowUserMutation
} = followApi