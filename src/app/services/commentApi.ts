import type { Comment } from "../../types/type";
import { api } from "./api";

export const commentApi = api.injectEndpoints({
  endpoints:(builder) => ({
    createComment: builder.mutation<Comment, {content:string, postId:string}> ({
      query: (commentData) =>({
        url:'/comments',
        method:'POST',
        body:commentData
      })
    }),

    deleteComment: builder.mutation<void, {id:string}>({
      query:(id) => ({
        url:`/comments/${id}`,
        method:'DELETE',
        body:id
      })
    })
  })
})

export const {
  useCreateCommentMutation,
  useDeleteCommentMutation
} = commentApi
