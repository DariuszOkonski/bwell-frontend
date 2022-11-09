import axios from 'axios'

import { ACCESS_TOKEN } from "../oauth2/constants/index";
import { handleRedirectIfNotAuthorized } from './BackendRequests';

// LocalStorageService
const localStorageService = () => localStorage.getItem(ACCESS_TOKEN)

// const config = (ops={}) => {
    
//     // const headers = new Headers({
//     //     "Content-Type": "application/json"
//     //   });
    
//     // if (localStorage.getItem(ACCESS_TOKEN)) {
//     // headers.append("Authorization", "Bearer " + localStorage.getItem(ACCESS_TOKEN));
//     // }

//     // console.log(localStorage.getItem(ACCESS_TOKEN));

//     // const defaults = { headers: headers };
//     // console.log(defaults);
    
//     // ops = Object.assign({}, defaults, ops);
//     // console.log(ops);
//     // console.log(ops.headers);


//     const configs = {headers: {}}

//     const token = localStorageService(ACCESS_TOKEN);
    
//     if (token) {
//       configs.headers['Authorization'] = 'Bearer ' + token
//     }

//     return configs;
//     // return options
//     // return ops
//   }

const Ax = axios.create(); 
// Add a request interceptor
Ax.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
    // config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Content-Type'] = 'application/json';
    config.responseType = 'json';
    config.mode = 'no-cors';
    return config;
  },
  error => {
    console.log(error);
    handleRedirectIfNotAuthorized(error.response);
    Promise.reject(error)
    }
)

Ax.interceptors.response.use(
    response => {
      
        return response
        // return response

    },
    function (error) {
      console.log(error)
      // if (error.config.method !== 'get') {
          console.log("should be rr")
          handleRedirectIfNotAuthorized(error.response)
      // }
  
     
      return Promise.reject(error)
    }
  )

  export {Ax}