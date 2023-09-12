import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { configUrl } from "url/config";

type jobInfo = {
  id: number;
  name: string;
};

export const jobInfoApi = createApi({
  reducerPath: "jobInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: configUrl.domain }),
  tagTypes: ["JobInfo"],
  endpoints: (builder) => ({
    getJobCategory: builder.query<jobInfo[],void>({
      query: () => "job/category",
      transformResponse: (response: { data: jobInfo[] }) => response.data,
    }),
    getJobCity: builder.query<jobInfo[], void>({
      query: () => "job/city",
      transformResponse: (response: { data: jobInfo[] }) => response.data,
    }),
    getJobLevel: builder.query<jobInfo[], void>({
      query: () => "job/level",
      transformResponse: (response: { data: jobInfo[] }) => response.data,
    }),
  }),
});


export const {useGetJobCategoryQuery,useGetJobCityQuery,useGetJobLevelQuery} = jobInfoApi;