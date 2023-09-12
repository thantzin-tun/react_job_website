import { useGetJobByIdQuery, useGetJobListsQuery,useGetJobByParamsQuery, useGetJobCityQuery, useGetJobCategoryQuery, useGetJobLevelQuery } from "api";

export const useJob = () => {
    let job_id = 44;

    const {data: getAllJobs_data,error,isLoading} = useGetJobListsQuery();

    const {data: getJobById_data} = useGetJobByIdQuery(job_id);

    const {data: getJobByParams_data} = useGetJobByParamsQuery({city_id:1,category_id:5});

    const {data: getJobCity_data} = useGetJobCityQuery();

    const {data: getJobCategory_data} = useGetJobCategoryQuery();
    
    const {data: getJobLevel_data} = useGetJobLevelQuery();
    
    return {
      getAllJobs_data,
      error,
      isLoading,
      getJobById_data,
      getJobByParams_data,
      getJobCity_data,
      getJobLevel_data,
      getJobCategory_data,
      useGetJobByParamsQuery
    }
}