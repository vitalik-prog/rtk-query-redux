import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    fetchPosts: builder.query<IPost[], number>({
      query: (limit = 5) => ({
        url: 'posts',
        params: { _limit: limit },
      }),
      providesTags: (result) => ['Post'],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation<IPost, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  })
});
