import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers =createAsyncThunk('users/getAllUsers',async(thunkApi)=>
{
    const response = await fetch('url');
    const data = await response.json();
    return data;
})

const initialState ={};
const userSlice=createSlice(
    {
        name:'user',
        initialState,
        reducers:{}
    }
)