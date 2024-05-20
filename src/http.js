import axios from "axios";
import Constant from "./Constant";
import GlobalFunction from "./GlobalFunction";

const http = axios.create({
    baseURL: Constant.api_url,
    headers: {
        "Content-type":"application/json"
    }
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent

    if(localStorage.lab_user_token !== undefined){

        config.headers['Authorization'] = `Bearer ${localStorage.lab_user_token}`;
        
    // console.log('ok');
    }
    
    return config;

    }, function (error) {
    // Do something with request error
    
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
    }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.response.status);
    if(error.response.status == 401){
        GlobalFunction.logout();
    }else if(error.response.status == 500){
        window.location.href = window.location.origin+'/error-500';
    }
    
    return Promise.reject(error);
});

export default http;