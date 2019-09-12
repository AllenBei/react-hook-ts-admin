
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
  } from './constants';
import { message } from 'antd';  


  const initialState = {
    list:[],
    status:{},
    info:{},
    isLoading:false
  };
  
  function loginReducer(state = initialState, action:any) {
    
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        message.success(action.response.errorMessage)
        return Object.assign({}, state);
      case USER_LOGIN_FAILURE:
        message.error(action.response.errorMessage)
        return Object.assign({}, state);
      default:
        return state;
    }
  }
  
  export default loginReducer;
  