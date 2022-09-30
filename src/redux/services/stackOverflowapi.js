import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const stackOverflowapi=createApi({
    reducerPath:"stackOverflowapi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.stackexchange.com/2.3"

    }),
    endpoints:(builder)=>({
        getQuestions:builder.query({query:(sort)=>`/questions?order=desc&sort=${sort}&site=stackoverflow`})

        
    })

})

export const {
useGetQuestionsQuery
   
  } = stackOverflowapi;