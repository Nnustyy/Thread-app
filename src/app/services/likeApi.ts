import type { Like } from "../../types/type";
import { api } from "./api";

export const likeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    likePost: builder.mutation<Like, {postId:string}>({
      query: (id) => ({
        url:'/likes',
        method:'POST',
        body:id
      })
    }),

    unlikePost: builder.mutation<void, string> ({
      query: (id) => ({
        url:`/likes/${id}`,
        method:'DELETE'
      })
    })
  })
})

export const {
  useLikePostMutation,
  useUnlikePostMutation
} = likeApi