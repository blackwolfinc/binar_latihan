import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import http2 from "../../utils/http";


const RegisterUser = async (input) => {
  return await http2.post(API_ENDPOINT.REGISTER_USER , input );
}

const useCreateUser = () => {
    return useMutation(RegisterUser)
  };


export { RegisterUser , useCreateUser }