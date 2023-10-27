import { combineReducers } from "@reduxjs/toolkit";
import authLogin from "./auth/authLogin";
import authMovieSlice from "./movie/authMovieSlice";
import authRetingSlice from "./rating/authRetingSlice";

// combine reducer adalah tempat dimana kita men setup 
// apa saja reducer yang kita gunakan dalam aplikasi 
export default combineReducers({
  auth: authLogin,
  movie: authMovieSlice,
  rating:authRetingSlice,
});
