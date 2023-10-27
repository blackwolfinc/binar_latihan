import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLogin";


// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya 
export const LoginUser = (input) => (dispatch) => {

//    const dispatch =  useDispatch()

    http2.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
        
        //  value / data yang kalaian akan dapet ketika api berhasil di jalankan 
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        // simpan di redux 
        dispatch(setToken(result.data.data.token));
        // dispatch(setIsLoggedIn("saltyoo"));\
        
    }).catch((err) => {
        // value yang kalian akan dapat ketika api erorr / gagal di jalankan 


    });
}



// (dispatch) => {



//     http2.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
//         //  value / data yang kalaian akan dapet ketika api berhasil di jalankan 
//         CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
//         // simpan di redux 
//         dispatch(setToken(result.data.data.token) , setIsLoggedIn(true));

//     }).catch((err) => {
//         // value yang kalian akan dapat ketika api erorr / gagal di jalankan 


//     });

// }

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)

}
