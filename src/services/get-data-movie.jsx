import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";


// Setting pertama untuk hit API 
const fetchDataMovie = async ({queryKey}) => {
    // untuk handle api 
    // V3
    // const  { data }  = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${ page ? page : 1}`)
    // V4 
    const [_key, _params] = queryKey;
    console.log(_params , "_params")
    const { data } = await http.get(_key, { params: _params });
    return data
}


// untuk Dinamis Handle√
const useMovieDataQuery = (options) => {
    // page = popery / prosss
    // userData
    // V3
    // return useQuery(["userData", page], () => fetchDataMovie(page));
    // V4
    return useQuery([API_ENDPOINT.NOW_PLAYING , options] , fetchDataMovie)

  };


export {fetchDataMovie , useMovieDataQuery}