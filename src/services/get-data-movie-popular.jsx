import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";


const fetchDataMoviePopular = async (page) => {
   const  { data }  = await http.get(`${API_ENDPOINT.NOW_POPULAR}?page=${ page ? page : 1}`)
   return data
}


// untuk Dinamis Handle√
const useMovieDataPopularQuery = (page) => {
    return useQuery(["userDataMoviePopular", page], () => fetchDataMoviePopular(page));
  };

export {fetchDataMoviePopular , useMovieDataPopularQuery}