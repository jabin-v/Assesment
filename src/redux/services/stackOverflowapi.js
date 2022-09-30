import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const stackOverflowapi=createApi({
    reducerPath:"stackOverflowapi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.stackexchange.com/2.3"

    }),
    endpoints:(builder)=>({
        getQuestions:builder.query({query:(sort)=>`/questions?order=desc&sort=${sort}&site=stackoverflow`}),
        getQuestionsBySeacrh:builder.query({query:(searchTerm)=>`/search/advanced?order=desc&sort=activity&title=${searchTerm}&site=stackoverflow`}),

        
    })

})

export const {
useGetQuestionsQuery,
useGetQuestionsBySeacrhQuery
   
  } = stackOverflowapi;