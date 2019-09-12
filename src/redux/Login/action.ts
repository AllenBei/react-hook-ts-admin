import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS
  } from './constants';
  import { loginCheck } from '../../models/common';
  import { push } from 'react-router-redux'
  

  interface loginRes {
    data: string;
    errorCode:number;
    errorMessage: string;
  }
  const checkLogin = (param:loginCheck) =>{
    if(param.username==='admin' && param.password ==='123'){
      return{
        data:'',
        errorCode:0,
        errorMessage:'登录成功'
      }
    }
    return{
      data:'',
      errorCode:-1,
      errorMessage:'账号或密码错误，登录失败'
    }
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
    return async (dispatch:any) => {
      try {
        const response = await checkLogin(param)
        if(response.errorCode===0){
          await dispatch(userLoadingSuccess(response));
          dispatch(push('/home'));
        }else{
          await dispatch(userLoginFail(response));
        }
      }
      catch(err){
        await dispatch(userLoginFail(err));
      }
      
    };
  };
  