import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Array<IPost>, number>({
      query: (limit: number = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
})