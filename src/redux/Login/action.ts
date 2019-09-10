import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS
  } from './constants';
  import nw from '../../common/http/post'
  import { loginCheck } from '../../models/common';
  import { push } from 'react-router-redux'
  

  interface loginRes {
    data: any;
    pid:number;
    total:number;
    errorCode:number;
    errorMsg: string;
    type:string;
  }

  export const userLoadingSuccess =(response:loginRes) => {
    return {
      type: USER_LOGIN_SUCCESS,
      response
    }
  };
  export const userLoginFail =(response:loginRes) => {
    return {
      type: USER_LOGIN_FAILURE,
      response
    }
  };
  
  
  export const userLoginReq = (param:loginCheck) => {
    const params = {
      pid:1,
      ...param
    }
    return async (dispatch:any) => {

      const response = await nw.post('/',params)

      if(response.errorCode===0){
        dispatch(userLoadingSuccess(response.data));
        dispatch(push('/home'));
      }else{
        dispatch(userLoginFail(response.data));
      }
    };
  };
  