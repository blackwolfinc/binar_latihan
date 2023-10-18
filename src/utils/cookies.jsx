import Cookies from "universal-cookie";

// default value untuk
const cookies = new Cookies();

// buat kunci cokkies
export const CookieKeys = {
    AuthToken: "TokenKu",
    User: "user",
  };



// setingan Default
const CookieOptions = {
    path: "/",
    secure: true,
  };
  

// seting CRD COOKIES
export const CookieStorage = {
    set: (key, data, options) => {
      return cookies.set(key, data, { ...CookieOptions, ...options });
    },
    get: (key, options) => {
      return cookies.get(key, { ...CookieOptions, ...options });
    },
    remove: (key, options) => {
      return cookies.remove(key, { ...CookieOptions, ...options });
    },
  };