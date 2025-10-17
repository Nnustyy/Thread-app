import type { Post } from "../../types/type";
import { api } from "./api";

export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, {content:string}>({
      query: (data) => ({
        url:'/posts',
        method:'POST',
        body:data
      })
    }),

    deletePost: builder.mutation<void, {id:string}>({
      query: (id) => ({
        url:'/posts',
        method:'DELETE',
        body:id
      })
    }),

    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url:'/posts',
        method:'GET'
      })
    }),

    getPostById: builder.query<Post, {id:string}>({
      query: (id) => ({
        url:`/posts/${id}`,
        method:'GET'
      })
    })
  })
})

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useLazyGetAllPostsQuery,
  useLazyGetPostByIdQuery
} = postApi