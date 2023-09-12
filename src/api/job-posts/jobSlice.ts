import { configUrl } from 'url/config';
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { routeFilter } from 'service';

type JobPosts = {
  id: number,
  title: string,
  logo: string,
  company_name: string,
  salary: string | number,
  location: string,
  description: string,
  deadline: string,
  experience: string,
  job_function: string,
  address: string
};

export const jobPostApi = createApi({
  reducerPath: 'jobPostApi',
  baseQuery: fetchBaseQuery({ baseUrl:configUrl.domain}),
  tagTypes: ['Jobs'],
  endpoints: (builder) => ({
    
    //Get All Job-list
    getJobLists: builder.query<JobPosts[], void>({
      query: () => "job/posts",
      transformResponse: (response:{data: JobPosts[]}) =>
        response.data,
      }),
      
      //Get Job By ID
      getJobById: builder.query<JobPosts[], number>({
        query: (id) => `job/posts?post_id=${id}` ,
        transformResponse: (response:{data: JobPosts[]}) =>
          response.data,
      }),

      //Get Job By Filter with parameters
      getJobByParams: builder.query<JobPosts[], {}>({
        query: (obj) =>  `job/posts/search${routeFilter(obj)}`,
        transformResponse: (response:{data: JobPosts[]}) =>
          response.data,
      }),
    }),
  });


export const {useGetJobListsQuery,useGetJobByIdQuery,useGetJobByParamsQuery} = jobPostApi;