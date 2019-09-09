import {
    USER_LOGIN_REQUEST,
    // USER_LOADING_REQUEST,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS
  } from './constants';
  import nw from '../../common/http/post'
  // import { push } from 'react-router-redux'
  
  export const userLogin =(parmas:any) => {
    return {
      type: USER_LOGIN_REQUEST,
      ...parmas,
      pid:1
    }
  };
  export const userLoadingSuccess =(info:any) => {
    // console.log(info)
    return {
      type: USER_LOGIN_SUCCESS,
      isLoading:false
    }
  };
  export const userLoginFail =(info:any) => {
    return {
      type: USER_LOGIN_FAILURE,
      isLoading:false
    }
  };
  
  
  export const userLoginRes = (param:any) => {
    const {username:mobile,password} = param
    const params = {
      pid:1,
      mobile,
      password
    }
    return async (dispatch:any) => {
        await nw.post('/',params)
        .then((response:any )=> {
          if (response.errorCode === 0) {
            console.log(response.data);
            dispatch(userLoadingSuccess(response.data));
          } 
          return response.data;
        })
        .catch((error:any) => {
          console.log(error);
          dispatch(userLoginFail(error));
        })
    };
  };
  