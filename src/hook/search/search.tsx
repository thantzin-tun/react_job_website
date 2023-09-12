import { useJob } from 'hook/job';
import React, { createContext, useContext } from 'react';

type SearchParamsProps = {
  children: React.ReactNode
}


interface JobState {
  title: string,
  category_id: number | string,
  city_id: number | string,
  freshDate: number | string,
  industry: number | string,
  level: number | string,
  salary: number | string,
}


type JobAction =
  | { type: 'title'; payload: string }
  | { type: 'category'; payload: number | string }
  | { type: 'city'; payload: number | string }
  | { type: 'freshDate'; payload: number | string }
  | { type: 'industry'; payload: number | string }
  | { type: 'level'; payload: number | string }
  | { type: 'salary'; payload: number | string }
  | { type: 'reset',payload:""}

const initialState: JobState = {
  title: "",
  category_id: "",
  city_id: "",
  freshDate: "",
  industry: "",
  level: "",
  salary: "",
}

const jobreducer = (state: JobState, action: JobAction): JobState => {
  const {type,payload} = action;
  switch (type) {
    case 'title':
      return { ...state, title: payload }
    case 'category':
      return { ...state, category_id: payload }
    case 'city':
      return { ...state, city_id: payload }
    case 'freshDate':
      return { ...state, freshDate: payload }
    case 'industry':
      return { ...state, industry: payload }
    case 'level':
      return { ...state, level: payload }
    case 'salary':
      return { ...state, salary: payload }
    case 'reset':
      return initialState 
    default:
      return state;
  }
}


export const SearchParamsContext = createContext<any | any>([initialState, () => {}]);

export const SearchParamsProvider: React.FC<SearchParamsProps> = ({ children }) => {

  const [state, dispatch] = React.useReducer(jobreducer, initialState);

  return(
        <SearchParamsContext.Provider value={{state,dispatch}}>
            {children}
        </SearchParamsContext.Provider>
  )
}

export const useSearch = () => {

  const {useGetJobByParamsQuery} = useJob();

  const {state, dispatch}: any= useContext(SearchParamsContext);

  const CallingJobSearchApi = () => {
    console.log("Api Params are", state);
    // useGetJobByParamsQuery(state);
  }

  return {
    state,
    CallingJobSearchApi,
    dispatch,
    JobAction: {
      title: 'title',
      category: 'category',
      city: 'city',
      freshDate: 'freshDate',
      industry: 'industry',
      level: 'level',
      salary: 'salary',
      reset:'reset'
    }
  }

}
