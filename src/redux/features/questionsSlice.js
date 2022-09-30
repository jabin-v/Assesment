import { createSlice } from '@reduxjs/toolkit';
const initialState ={
  sort:"activity"
};


  const questionsSlice=createSlice({
    name:"questions",
    initialState,
    reducers:{
      selectSort:(state,action)=>{
        state.sort = action.payload;
      }

    }
  })


  export const { selectSort } = questionsSlice.actions;
  export default questionsSlice.reducer;