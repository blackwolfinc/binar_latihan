import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token : "" ,
    isLogin : "",
    user : ""
}


const authMovieSlice = createSlice({
    name : "loginAuth",
    initialState ,
    reducers :{

    }
})


export default authMovieSlice.reducer;
