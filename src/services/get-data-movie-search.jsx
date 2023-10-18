import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";


// Setting pertama untuk hit API 
const fetchDataMovieSearch = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params: _params });
    return data
}


// untuk Dinamis Handle√
const useMovieDataSearchQuery = (options) => {
    return useQuery([API_ENDPOINT.DETAIL_MOVIE_SEARCH , options] , fetchDataMovieSearch)
  };


export {fetchDataMovieSearch , useMovieDataSearchQuery}